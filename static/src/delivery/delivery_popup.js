/** @odoo-module **/
import { AbstractAwaitablePopup } from "@point_of_sale/app/popup/abstract_awaitable_popup";
import { useState } from "@odoo/owl";

export class DeliveryPopup extends AbstractAwaitablePopup {
    static template = "pos_restaurant_takeout.DeliveryPopup";

    setup() {
        super.setup();
        this.state = useState({ 
            is_delivery: true, 
            driver_id: this.props.order.driver_id || false 
        });
    }

    get selectedDriver() {
        return this.props.drivers.find(d => d.id === this.state.driver_id);
    }

    selectDriver(id) {
        this.state.driver_id = id;
    }

    getPayload() {
        return { 
            is_delivery: this.state.is_delivery, 
            driver_id: this.state.driver_id, 
            driver_name: this.selectedDriver ? this.selectedDriver.name : false 
        };
    }
}
