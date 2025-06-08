class PaginatedAPISimulator:
    def __init__(self, data, page_size=5):
        self.data = data
        self.page_size = page_size

    def get_page(self, page_number):
        start = page_number * self.page_size
        end = start + self.page_size
        return self.data[start:end]

    def total_pages(self):
        return (len(self.data) + self.page_size - 1)