import { event } from "@/lib/event";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RegistrationForm } from "./registration-form";

export const metadata = {
  title: `Register | ${event.name}`,
  description: `Register for ${event.name}`,
};

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-6 pb-20">
        <div className="mx-auto max-w-lg">
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-2">Registration</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold">
              Register for <span className="text-[var(--accent)]">{event.name}</span>
            </h1>
          </div>
          <RegistrationForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
