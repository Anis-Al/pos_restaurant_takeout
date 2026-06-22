from odoo import fields, models

class ResPartner(models.Model):
    _inherit = 'res.partner'

    is_delivery_driver = fields.Boolean('Delivery Driver', default=False)
