from odoo import models

class PosSession(models.Model):
    _inherit = 'pos.session'

    def _loader_params_res_partner(self):
        res = super()._loader_params_res_partner()
        res['search_params']['domain'] = ['|'] + res['search_params'].get('domain', []) + [('is_delivery_driver', '=', True)]
        res['search_params']['fields'] += ['is_delivery_driver']
        return res
