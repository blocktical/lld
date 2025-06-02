from message_senders.sendgrid_sender import SendGridSender
from message_senders.twilio_sender import TwilioSender
from message_senders.whatsapp_sender import WhatsAppSender

from notifications.email import EmailNotification
from notifications.sms import SMSNotification
from notifications.whatsapp import WhatsAppNotification

def main():
    email_sender = SendGridSender()
    sms_sender = TwilioSender()
    whatsapp_sender = WhatsAppSender()

    email_notification = EmailNotification(email_sender)
    sms_notification = SMSNotification(sms_sender)
    whatsapp_notification = WhatsAppNotification(whatsapp_sender)

    email_notification.notify("Welcome to Bridge Pattern World!")
    sms_notification.notify("Your OTP is 456123")
    whatsapp_notification.notify("Your order has been shipped 🚚")

if __name__ == "__main__":
    main()