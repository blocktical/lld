```mermaid
classDiagram
    class WeatherAPIClient {
        +get_weather(city)
    }

    class RateLimitedProxy {
        -WeatherAPIClient client
        -int max_calls
        -int interval
        -deque call_times
        +get_weather(city)
    }

    class Main {
        +main()
    }

    Main --> RateLimitedProxy
    RateLimitedProxy --> WeatherAPIClient