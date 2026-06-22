{
    'name': 'POS Restaurant - Takeout',
    'version': '17.0.1.0.0',
    'category': 'Point of Sale',
    'author': 'Anis Alim',
    'summary': 'Takeout orders on the restaurant POS floor screen',
    'depends': ['pos_restaurant', 'pos_preparation_display'],
    'data': [
        'views/pos_order_views.xml',
        'views/res_partner_views.xml',
    ],
    'assets': {
        'point_of_sale._assets_pos': [
            'pos_restaurant_takeout/static/src/models/pos_order.js',
            'pos_restaurant_takeout/static/src/floor_screen/takeout_tile.xml',
            'pos_restaurant_takeout/static/src/floor_screen/takeout_tile.js',
            'pos_restaurant_takeout/static/src/floor_screen/takeout_tile.scss',
            'pos_restaurant_takeout/static/src/floor_screen/floor_screen.xml',
            'pos_restaurant_takeout/static/src/floor_screen/floor_screen.js',
            'pos_restaurant_takeout/static/src/delivery/delivery_popup.xml',
            'pos_restaurant_takeout/static/src/delivery/delivery_popup.js',
            'pos_restaurant_takeout/static/src/order_screen/product_screen.xml',
            'pos_restaurant_takeout/static/src/order_screen/product_screen.js',
            'pos_restaurant_takeout/static/src/receipt/order_receipt.xml',
        ],
        'pos_preparation_display.assets': [
            'pos_restaurant_takeout/static/src/kitchen_display/order_widget.xml',
            'pos_restaurant_takeout/static/src/kitchen_display/order_widget.js',
            'pos_restaurant_takeout/static/src/kitchen_display/order_widget.scss',
        ],
    },
    'installable': True,
    'license': 'LGPL-3',
}
