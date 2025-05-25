from parsers.apache_parser import ApacheLogParser
from parsers.nginx_parser import NginxLogParser
from parsers.syslog_parser import SyslogParser

class LogParserFactory:
    @staticmethod
    def get_parser(log_type):
        if log_type == 'apache':
            return ApacheLogParser()
        elif log_type == 'nginx':
            return NginxLogParser()
        elif log_type == 'syslog':
            return SyslogParser()
        else:
            raise ValueError("Unsupported log type")
