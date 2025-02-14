import boto3
from botocore.exceptions import ClientError
from csv import DictReader
import json

def main():

    with open("data/clean.csv") as f:
        emails: dict[str, list] = dict()
        reader = DictReader(f)
        for row in reader:
            recipient = row["recipient"]
            if len(recipient) == 0:
                continue
            obj = {
                "sender": row["sender"],
                "index": row["index"],
                "note": row["note"],
            }
            if recipient in emails:
                emails[recipient].append(obj)
            else:
                emails[recipient] = [obj]
        
        print(emails)

        NAME = "The Michigan Daily Cupids"
        SENDER = f"{NAME} <noreply@michigandaily.com>"
        SUBJECT = "You've been struck by a Michigan Daily Cupid"
        BASE_URL = "https://specials.michigandaily.com/2025/love-notes"
        AWS_REGION = "us-east-2"
        CHARSET = "UTF-8"

        session = boto3.Session(profile_name='ses')
        client = session.client("ses", region_name=AWS_REGION)

        # first_names = {}
        # with open('first_names.json') as d:
        #     first_names = json.load(d)

        for recipient in emails:
            recipient_uniqname = recipient.split('@')[0]
            greeting = "Hey {} :)".format('there')
            if len(emails[recipient]) > 1:
                body = "You've gotten several love notes! Check them out at The Statement's Love Edition:"
                htmlbody = f"<p>{body}</p><ul>"
                plainbody = f"{body}\r\n\r\n"
                for sender in emails[recipient]:
                    url = f"{BASE_URL}/?q={sender['index']}"
                    htmlbody += "<li>"
                    plainbody += "\t- "
                    if len(sender["sender"]) == 0:
                        # append the note
                        htmlbody += f"A secret admirer sent you a love note: {sender['note']}<br>"
                        plainbody += (
                            f"A secret admirer sent you a love note: {sender['note']}"
                        )
                    else:
                        sender_name = sender["sender"].split('@')[0]
                        htmlbody += f"<a href='mailto:{sender['sender']}'>{'A special someone'}</a> sent you a love note: {sender['note']}<br>"
                        plainbody += (
                            f"{sender['sender']} sent you a love note: \r\n{sender['note']}"
                        )
                    htmlbody += "</li>"
                    plainbody += "\r\n"
                htmlbody += "</ul>"
                htmlbody += "<p>And don't forget to pick up a print edition too on February 14th.</p>"
                plainbody += "\r\nAnd don't forget to pick up a print edition too on February 14th."
            else:
                url = f"{BASE_URL}/?q={emails[recipient][0]['index']}"
                sender = emails[recipient][0]["sender"]
                if len(sender) == 0:
                    body = f"""You've gotten a love note from a secret admirer! Here's what they wanted to tell you ;): <br><br> {emails[recipient][0]['note']}<br><br> Check it out at The Statement's Love Edition"""
                    plainbody = (
                        f"{body} here (coming soon!) ({BASE_URL}) and on newsstands on February 14th."
                    )
                    htmlbody = f"<p>{body} <a href='{BASE_URL}'>here (coming soon!)</a> and on newsstands on February 14th."
                else:
                    plainbody = f"""{sender} sent you a love note!  Here's what they wanted to tell you ;): <br><br>{emails[recipient][0]['note']}<br><br> Check it out at The Statement's Love Edition here (coming soon!)({BASE_URL}) and on newsstands on February 14th."""
                    htmlbody = f"""
                      <p>
                        <a href='mailto:{sender}'>{'A special someone'}</a> sent you a love note: {emails[recipient][0]['note']}<br> Check it out at The Statement's Love Edition
                        <a href='{BASE_URL}'>here (coming soon!)</a> and on newsstands on February 14th.
                      </p>"""

            BODY_TEXT = f"{greeting}\r\n\r\n" f"{plainbody}\r\n\r\n" f"XOXO,\r\n{NAME}"

            BODY_HTML = f"""<html>
            <head></head>
            <body>
            <p>{greeting}</p>
            {htmlbody}
            <p>XOXO,<br>{NAME}</p>
            </body>
            </html>
            """

            try:
                response = client.send_email(
                    Destination={
                        "ToAddresses": [
                            recipient
                        ],
                    },
                    Message={
                        "Body": {
                            "Html": {
                                "Charset": CHARSET,
                                "Data": BODY_HTML,
                            },
                            "Text": {
                                "Charset": CHARSET,
                                "Data": BODY_TEXT,
                            },
                        },
                        "Subject": {
                            "Charset": CHARSET,
                            "Data": f"{SUBJECT}",
                        },
                    },
                    Source=SENDER,
                )
            # Display an error if something goes wrong.
            except ClientError as e:
                print(e.response["Error"]["Message"])
            else:
                print("Email sent! Message ID:"),
                print(response["MessageId"])


if __name__ == "__main__":
    main()