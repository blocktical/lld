from order_facade import OrderFacade

if __name__ == "__main__":
    order_facade = OrderFacade()
    order_facade.place_order(user_id="U123", item_id="I456")
