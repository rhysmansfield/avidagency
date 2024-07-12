import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/send-email";

export async function POST(request: Request) {
  const { name, emailAddress, phoneNumber, message } = await request.json();

  const internalBody = `
    <p>There has been a new contact form enquiry on the website</p>
    <ul>
      <li>
        <p>Name</p> 
        <p>${name}</p>
      </li>
      <li>
        <p>Email</p> 
        <p>${emailAddress}</p>
      </li>
      <li>
        <p>Phone</p>
        <p>${phoneNumber}</p>
      </li>
      <li>
      <p>Message</p> 
      <p>${message}</p>
    </li>
    </ul>
  `;

  const externalBody = `
    <h1>We have received your message!</h1>
    <p>We're just letting you know that we've received your enquiry and we will be in touch shortly.</p>
    <h3>Your enquiry:</h3>
    <p>${message}</p>
    <p>Thanks,<br/>Avid Media Team</p>
  `;

  try {
    // Validate recaptcha
    await Promise.all([
      sendEmail({
        to: emailAddress,
        subject: "We have received your message!",
        html: externalBody,
      }),
      sendEmail({
        to: "info@avidagency.co.uk",
        subject: "avidagency.co.uk: New contact form enquiry",
        html: internalBody,
      }),
    ]);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "There was an issue sending your message, please try again!" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Your message has been sent!" },
    { status: 200 }
  );
}
