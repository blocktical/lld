from app_config import AppConfig

def run_service_two():
    config = AppConfig().get_config()
    print("[Service Two] Using config:", config)