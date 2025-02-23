import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components"

interface ContactEmailProps {
  name: string
  email: string
  message: string
}

export default function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your TypeScript Tips contact form</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Text>You have received a new message from the contact form:</Text>
          <Section style={messageBox}>
            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Hr />
            <Text>
              <strong>Message:</strong>
            </Text>
            <Text>{message}</Text>
          </Section>
          <Hr />
          <Text>This email was sent from your TypeScript Tips website contact form.</Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
}

const h1 = {
  fontSize: "24px",
  fontWeight: "bold",
  marginTop: "48px",
  marginBottom: "24px",
}

const messageBox = {
  background: "#f2f3f3",
  borderRadius: "4px",
  padding: "24px",
  marginBottom: "24px",
}

