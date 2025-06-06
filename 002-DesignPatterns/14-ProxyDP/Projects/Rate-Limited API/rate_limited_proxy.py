import time
from collections import deque
from api_client import WeatherAPIClient

class RateLimitedProxy:
    def __init__(self, max_calls, interval_sec):
        self.client = WeatherAPIClient()
        self.max_calls = max_calls
        self.interval = interval_sec
        self.call_times = deque()

    def get_weather(self, city):
        current_time = time.time()

        # Remove old timestamps
        while self.call_times and current_time - self.call_times[0] > self.interval:
            self.call_times.popleft()

        if len(self.call_times) < self.max_calls:
            self.call_times.append(current_time)
            return self.client.get_weather(city)
        else:
            print("[Proxy] Too many requests! Try again later.")
            return None
