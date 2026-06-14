from odoo import api, fields, models


class PosOrder(models.Model):
    _inherit = 'pos.order'

    is_takeout = fields.Boolean(string='Takeout', default=False)

    def _export_for_ui(self, order):
        result = super()._export_for_ui(order)
        result['is_takeout'] = order.is_takeout
        return result

    @api.model
    def _order_fields(self, ui_order):
        fields_return = super()._order_fields(ui_order)
        fields_return['is_takeout'] = ui_order.get('is_takeout', False)
        return fields_return
