from email_template import EmailTemplate

# Create a base welcome email template
welcome_email = EmailTemplate(
    subject="Welcome Email",
    body="Hello {name}, Welcome to our platform!",
    recipient=""
)

# Clone and customize
ankit_email = welcome_email.clone()
ankit_email.recipient = "ankit@example.com"
ankit_email.body = ankit_email.body.replace("{name}", "Ankit")

amit_email = welcome_email.clone()
amit_email.recipient = "amit@example.com"
amit_email.body = amit_email.body.replace("{name}", "Amit")

# Send emails
ankit_email.send()
amit_email.send()

# Another use-case: password reset
reset_email = EmailTemplate(
    subject="Password Reset",
    body="Hi {name}, here is your password reset link: https://reset.com/abc123",
    recipient=""
)

amit_reset = reset_email.clone()
amit_reset.recipient = "amit@example.com"
amit_reset.body = amit_reset.body.replace("{name}", "Amit")

amit_reset.send()
