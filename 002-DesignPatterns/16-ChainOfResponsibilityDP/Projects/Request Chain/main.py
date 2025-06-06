from request import Request
from handlers.logging_handler import LoggingHandler
from handlers.auth_handler import AuthHandler
from handlers.validation_handler import ValidationHandler
from handlers.business_handler import BusinessHandler

# Create request
req = Request(user="Tanuj", data="{'order':'123'}", token="valid-token")

# Setup chain
logger = LoggingHandler()
auth = AuthHandler()
validate = ValidationHandler()
business = BusinessHandler()

logger.set_next(auth).set_next(validate).set_next(business)

# Start the chain
logger.handle(req)