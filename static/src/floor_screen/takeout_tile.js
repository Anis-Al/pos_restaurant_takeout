/** @odoo-module **/
import { Component } from "@odoo/owl";

export class TakeoutTile extends Component {
    static template = "pos_restaurant_takeout.TakeoutTile";
    static props = {
        order: { type: Object },
        onOpen: { type: Function },
        onDelete: { type: Function },
    };

    get isTakeout() {
        return this.props.order.is_takeout;
    }
    get isDelivery() {
        return this.props.order.is_delivery;
    }
    get driverName() {
        return this.props.order.driver_name || 'Unassigned';
    }

    get label() {
        return this.props.order.name || "Takeout";
    }

    get itemCount() {
        return (this.props.order.orderlines || []).reduce(
            (sum, line) => sum + line.quantity,
            0
        );
    }

    onTileClick() {
        this.props.onOpen(this.props.order);
    }

    onDeleteClick(ev) {
        ev.stopPropagation();
        this.props.onDelete(this.props.order);
    }
}
