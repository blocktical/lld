from app_config import AppConfig

def run_service_one():
    config = AppConfig().get_config()
    print("[Service One] Using config:", config)