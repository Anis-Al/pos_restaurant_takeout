/** @odoo-module **/
import { Order } from "@pos_preparation_display/app/components/order/order";
import { patch } from "@web/core/utils/patch";

patch(Order.prototype, {
    get isTakeout() {
        return !!this.props.order?.is_takeout;
    },
});
