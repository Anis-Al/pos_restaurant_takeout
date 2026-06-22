/** @odoo-module **/
import { ProductScreen } from "@point_of_sale/app/screens/product_screen/product_screen";
import { patch } from "@web/core/utils/patch";
import { DeliveryPopup } from "@pos_restaurant_takeout/delivery/delivery_popup";

patch(ProductScreen.prototype, {
    get isTakeoutOrder() {
        return !!this.currentOrder?.is_takeout;
    },
    async openDeliveryPopup() {
        const drivers = this.pos.db.get_partners_sorted().filter(p => p.is_delivery_driver);
        const { confirmed, payload } = await this.popup.add(DeliveryPopup, {
            title: 'Delivery',
            order: this.currentOrder,
            drivers
        });
        if (confirmed) {
            Object.assign(this.currentOrder, payload);
            if (payload.is_delivery) {
                this.currentOrder.is_takeout = true;
            }
        }
    }
});
