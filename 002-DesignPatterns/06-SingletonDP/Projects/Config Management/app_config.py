class AppConfig:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            print("[AppConfig] Creating new instance...")
            cls._instance = super(AppConfig, cls).__new__(cls)
            cls._instance.load_config()
        return cls._instance

    def load_config(self):
        print("[AppConfig] Loading config...")
        self.config = {
            "app_name": "MySingletonApp",
            "version": "1.0",
            "debug": True
        }

    def get_config(self):
        return self.config