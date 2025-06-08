class APIIterator:
    def __init__(self, api_simulator):
        self.api = api_simulator
        self.current_page = 0
        self.current_items = []
        self.index_in_page = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index_in_page >= len(self.current_items):
            if self.current_page >= self.api.total_pages():
                raise StopIteration
            self.current_items = self.api.get_page(self.current_page)
            self.current_page += 1
            self.index_in_page = 0

        if self.index_in_page < len(self.current_items):
            result = self.current_items[self.index_in_page]
            self.index_in_page += 1
            return result
        else:
            raise StopIteration