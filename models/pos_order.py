from odoo import api, fields, models
from odoo.exceptions import ValidationError


class PosOrder(models.Model):
    _inherit = 'pos.order'

    is_takeout = fields.Boolean(string='Takeout', default=False)
    is_delivery = fields.Boolean('Delivery', default=False)
    driver_id = fields.Many2one('res.partner', 'Driver', domain=[('is_delivery_driver', '=', True)])

    @api.constrains('is_delivery', 'is_takeout')
    def _check_delivery(self):
        for o in self:
            if o.is_delivery and not o.is_takeout:
                raise ValidationError("Delivery requires takeout.")

    def _export_for_ui(self, order):
        result = super()._export_for_ui(order)
        result.update({
            'is_takeout': order.is_takeout,
            'is_delivery': order.is_delivery,
            'driver_id': order.driver_id.id or False,
            'driver_name': order.driver_id.name or False
        })
        return result

    @api.model
    def _order_fields(self, ui_order):
        fields_return = super()._order_fields(ui_order)
        fields_return.update({
            'is_takeout': ui_order.get('is_takeout', False),
            'is_delivery': ui_order.get('is_delivery', False),
            'driver_id': ui_order.get('driver_id', False),
        })
        return fields_return
