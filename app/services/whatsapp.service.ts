import twilio from "twilio";
import { TWILIO_ACCOUNT_SID } from "../config/env.ts";
import { TWILIO_AUTH_TOKEN } from "../config/env.ts"; 

const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function createMessage() {
  const message = await client.messages.create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: "+15017122661",
    to: "+15558675310",
  });

  console.log(message.body);
}

createMessage();