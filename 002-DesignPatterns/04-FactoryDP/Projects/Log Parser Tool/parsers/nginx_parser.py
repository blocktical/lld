class NginxLogParser:
    def parse(self, log):
        print(f"🔍 Parsing Nginx log: {log}")
        return {"type": "nginx", "message": log}
