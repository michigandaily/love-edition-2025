from csv import DictReader, DictWriter
from json import dump
import os


def get_email(recipient: str):
    if len(recipient) > 0:
        at = recipient.find("@")
        if at == -1:
            recipient += "@umich.edu"
    return recipient


def get_recipients(recipients: str):
    r = recipients.strip().lower()
    if r.find(", ") > -1:
        r = r.split(", ")
    elif r.find(" and ") > -1:
        r = r.split(" and ")
    elif r.find("; ") > -1:
        r = r.split("; ")
    else:
        r = [r]
    return r


def main():
    rows = list()
    notes = list()
    with open("data/raw.csv") as f:
        reader = DictReader(f)
        i = 0
        for row in reader:
            recipients = get_recipients(row["recipient"])
            note = row["note"].strip()
            for recipient in recipients:
                rows.append(
                    {
                        "note": note,
                        "recipient": get_email(recipient),
                        "sender": row["email"].strip().lower(),
                        "index": i,
                    }
                )
            notes.append(note)
            i += 1

    with open("data/clean.csv", "w") as f:
        fieldnames = ["index", "note", "recipient", "sender"]
        writer = DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for row in rows:
            writer.writerow(row)

    with open("src/data.json", "w") as f:
        obj = {i: notes[i] for i in range(len(notes))}
        dump(obj, f, indent=2)


if __name__ == "__main__":
    main()