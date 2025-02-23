import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components"

interface ConfirmationEmailProps {
  name: string
  email: string
  message: string
}

export default function ConfirmationEmail({ name, message }: ConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thanks for contacting TypeScript Tips!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thank you for contacting us!</Heading>
          <Text style={text}>Hi {name},</Text>
          <Text style={text}>
            We&apos;ve received your message and will get back to you as soon as possible. Here&apos;s a copy of your message for
            your records:
          </Text>
          <Section style={messageBox}>
            <Text style={text}>
              <strong>Your Message:</strong>
            </Text>
            <Text style={text}>{message}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>This is an automated confirmation. Please don&apos;t reply to this email.</Text>
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
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  marginTop: "48px",
  marginBottom: "24px",
}

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
}

const messageBox = {
  background: "#f2f3f3",
  borderRadius: "4px",
  padding: "24px",
  marginBottom: "24px",
  marginTop: "24px",
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
}

const footer = {
  color: "#898989",
  fontSize: "14px",
  marginTop: "24px",
}

