import time

class WeatherAPIClient:
    def get_weather(self, city):
        print(f"[API] Fetching weather data for {city}...")
        time.sleep(1)  # Simulate network delay
        return {"city": city, "temp": 30 + hash(city) % 10}
