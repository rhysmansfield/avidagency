import { Hero } from "@app/components/hero/hero";

export default function Home() {
  return (
    <main>
      <Hero
        title={
          <>
            <div>Let&apos;s chat.</div>
            Tell us about your project.
          </>
        }
        subtitle="Let's create something together 👋"
        form={{
          heading: "Send us a message 🚀",
          fields: [
            {
              label: "Name",
              name: "name",
              type: "text",
              required: true,
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              required: true,
            },
            {
              label: "Tell us more about your project",
              name: "message",
              type: "textarea",
              required: true,
            },
          ],
        }}
      />
    </main>
  );
}
