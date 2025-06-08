from api_simulator import PaginatedAPISimulator
from iterator import APIIterator

# Simulating some data like product listings or user logs
data = [f"Item-{i}" for i in range(1, 23)]  # 22 items
api = PaginatedAPISimulator(data, page_size=5)

# Create the iterator
iterator = APIIterator(api)

# Client code — simplified iteration
for item in iterator:
    print("Fetched:", item)