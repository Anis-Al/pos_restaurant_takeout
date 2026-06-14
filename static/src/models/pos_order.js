/** @odoo-module **/
import { Order } from "@point_of_sale/app/store/models";
import { patch } from "@web/core/utils/patch";

patch(Order.prototype, {
    setup(_defaultObj, options) {
        super.setup(...arguments);
        this.is_takeout = this.is_takeout || false;
    },

    init_from_JSON(json) {
        super.init_from_JSON(...arguments);
        this.is_takeout = json.is_takeout || false;
    },

    export_as_JSON() {
        const json = super.export_as_JSON(...arguments);
        json.is_takeout = this.is_takeout || false;
        return json;
    },

    export_for_printing() {
        const result = super.export_for_printing(...arguments);
        result.is_takeout = this.is_takeout || false;
        return result;
    },
});
