class SyslogParser:
    def parse(self, log):
        print(f"🔍 Parsing Syslog: {log}")
        return {"type": "syslog", "message": log}
