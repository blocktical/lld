from factory.log_parser_factory import LogParserFactory

def process_log(log_type, log_data):
    try:
        parser = LogParserFactory.get_parser(log_type)
        result = parser.parse(log_data)
        print("✅ Parsed Log:", result)
    except ValueError as e:
        print(f"❌ {e}")

# Sample Logs
logs = [
    ("apache", "127.0.0.1 - - [22/May/2025] GET /index.html"),
    ("nginx", "192.168.0.1 - - [22/May/2025] POST /api/data"),
    ("syslog", "May 22 10:00:00 hostname CRON[12345]: job started"),
    ("mysql", "This should raise error")
]

for log_type, log in logs:
    process_log(log_type, log)
    print("--------")
