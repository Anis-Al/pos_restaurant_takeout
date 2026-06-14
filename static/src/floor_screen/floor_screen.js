/** @odoo-module **/
import { FloorScreen } from "@pos_restaurant/app/floor_screen/floor_screen";
import { TakeoutTile } from "@pos_restaurant_takeout/floor_screen/takeout_tile";
import { patch } from "@web/core/utils/patch";
import { ConfirmPopup } from "@point_of_sale/app/utils/confirm_popup/confirm_popup";
import { _t } from "@web/core/l10n/translation";

FloorScreen.components = { ...FloorScreen.components, TakeoutTile };

patch(FloorScreen.prototype, {
    async newTakeoutOrder() {
        const order = this.pos.add_new_order();
        order.is_takeout = true;
        // setBooked(true) prevents unsetTable() from removing the order
        // when FloorScreen.onWillStart fires on next navigation back
        order.setBooked(true);
        this.pos.showScreen("ProductScreen");
    },

    openTakeoutOrder(order) {
        this.pos.set_order(order);
        this.pos.showScreen("ProductScreen");
    },

    async deleteTakeoutOrder(order) {
        const { confirmed } = await this.popup.add(ConfirmPopup, {
            title: _t("Delete Takeout Order"),
            body: _t("Delete '%s'? This cannot be undone.", order.name),
            confirmText: _t("Delete"),
        });
        if (!confirmed) return;
        if (order.server_id !== undefined) {
            await this.pos.orm.call("pos.order", "remove_from_ui", [[order.server_id]]);
        }
        this.pos.removeOrder(order);
    },

    get takeoutOrders() {
        return this.pos.get_order_list().filter(
            (o) => o.is_takeout && !o.finalized
        );
    },
});
