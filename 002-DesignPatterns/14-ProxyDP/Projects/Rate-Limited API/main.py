from rate_limited_proxy import RateLimitedProxy
import time

proxy = RateLimitedProxy(max_calls=3, interval_sec=10)

cities = ["Delhi", "Mumbai", "Chennai", "Kolkata", "Bangalore"]

for i in range(5):
    city = cities[i % len(cities)]
    result = proxy.get_weather(city)
    if result:
        print(f"✅ Got weather for {result['city']}: {result['temp']}°C")
    time.sleep(2)  # Simulate user delay
