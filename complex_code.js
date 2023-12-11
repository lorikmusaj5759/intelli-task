/* 
Filename: complex_code.js 
Description: This code is a simulated email server that handles receiving, storing, and sending emails.
*/
class Email {
  constructor(sender, recipient, subject, message) {
    this.sender = sender;
    this.recipient = recipient;
    this.subject = subject;
    this.message = message;
  }

  getSender() {
    return this.sender;
  }

  getRecipient() {
    return this.recipient;
  }

  getSubject() {
    return this.subject;
  }

  getMessage() {
    return this.message;
  }
}

class EmailServer {
  constructor() {
    this.inbox = [];
    this.sentbox = [];
  }

  receiveEmail(email) {
    this.inbox.push(email);
  }

  sendEmail(email) {
    this.sentbox.push(email);
  }

  getUnreadEmails() {
    // Simulating server querying and filtering
    return this.inbox.filter((email) => !this.sentbox.includes(email));
  }

  getSentEmails() {
    return this.sentbox;
  }
}

// Simulating user interactions
const emailServer = new EmailServer();

// Receiving emails
const email1 = new Email("sender@example.com", "recipient@example.com", "Hello", "Just wanted to say hi!");
emailServer.receiveEmail(email1);

const email2 = new Email("another_sender@example.com", "recipient@example.com", "Meeting Request", "Are you available for a meeting on Friday?");
emailServer.receiveEmail(email2);

// Sending emails
const email3 = new Email("me@example.com", "someone_else@example.com", "Important Notice", "Please take a look at the updated policy document.");
emailServer.sendEmail(email3);

// Accessing emails
console.log("Unread Emails:");
const unreadEmails = emailServer.getUnreadEmails();
for (let i = 0; i < unreadEmails.length; i++) {
  const email = unreadEmails[i];
  console.log("Sender:", email.getSender());
  console.log("Recipient:", email.getRecipient());
  console.log("Subject:", email.getSubject());
  console.log("Message:", email.getMessage());
  console.log("----------------------");
}

console.log("Sent Emails:");
const sentEmails = emailServer.getSentEmails();
for (let i = 0; i < sentEmails.length; i++) {
  const email = sentEmails[i];
  console.log("Sender:", email.getSender());
  console.log("Recipient:", email.getRecipient());
  console.log("Subject:", email.getSubject());
  console.log("Message:", email.getMessage());
  console.log("----------------------");
}