import { WaitlistForm } from "@/components/waitlist-form";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#6DBAC4]">

      {/* Header */}
      <header className="pt-3 pb-1 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl md:text-3xl font-light text-white tracking-[0.2em]">
            Evryn
          </Link>
          <a
            href="#waitlist"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Join waitlist
          </a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pt-0 pb-12 md:pb-20">

        {/* Hero: Seed of Life + Tagline */}
        <section className="text-center mb-12 md:mb-16">
          <div className="-mt-8 md:-mt-12 mb-0 md:mb-1">
            <Image
              src="/seed-of-life.svg"
              alt="Seed of Life"
              width={240}
              height={240}
              className="mx-auto md:w-[320px] md:h-[320px]"
              priority
            />
          </div>
          <div className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-10">
            <p>Imagine...</p>
            <p>if every time you needed someone</p>
            <p>for <em>anything</em></p>
            <p>you had a trusted friend</p>
            <p>who really knew you</p>
            <p>and she'd just...</p>
            <p>find you the right person.</p>
            <p className="pt-3">And not <em>just</em> the best fit for you</p>
            <p>but <em>also</em> someone she <em><span className="underline">trusted</span></em> enough</p>
            <p>to bring into your life.</p>
          </div>
          <p className="text-2xl md:text-3xl text-white font-medium">
            Evryn is your personal AI
          </p>
          <p className="text-2xl md:text-3xl text-white font-medium">
            who finds you <em>your</em> people.
          </p>
        </section>

        {/* Three Pillars - side by side on desktop */}
        <section className="mb-12 md:mb-16 pt-8 border-t border-white/20">
          <p className="text-2xl md:text-3xl text-white/90 mb-8">It's easy...</p>
          <div className="grid md:grid-cols-[1fr_1fr_1.3fr] gap-8 md:gap-10">

            {/* Pillar 1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-medium text-white mb-3">
                You just talk to Evryn
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                She listens, learns what you actually need, and continues to deepen her understanding of you. No searching. No swiping. No profiles to build.
              </p>
            </div>

            {/* Pillar 2 */}
            <div>
              <h2 className="text-xl md:text-2xl font-medium text-white mb-3">
                She finds your people
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                Soulmate, cofounder, crew, hookup — even a plumber, or just someone to buy an old couch. Not <em>more</em> options. The <em>right</em> ones.
              </p>
            </div>

            {/* Pillar 3 */}
            <div>
              <h2 className="text-xl md:text-2xl font-medium text-white mb-3">
                She guards your gates
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                No public profile and no open messaging means there's simply no way for pesterers, creeps, spammers, or scammers to even find you. Evryn only connects someone if she trusts them enough to connect them to you.
              </p>
            </div>

          </div>
        </section>

        {/* Our Promise */}
        <section className="mb-10 md:mb-12 py-8 border-t border-b border-white/20">
          <h2 className="text-xl md:text-2xl font-medium text-white mb-3">
            Our promise
          </h2>
          <p className="text-base text-white/80 leading-relaxed max-w-2xl">
            No more subscriptions that don't deliver. You pay only when a connection genuinely works for you. Evryn's success and your success are always the same thing.
          </p>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="text-center mb-16">
          <p className="text-xl md:text-2xl text-white italic mb-10 md:mb-12">
            "I can't wait to meet you." — Evryn
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-xl mx-auto border border-white/20">
            <WaitlistForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-white/20">
          <p className="text-lg text-white mb-4">
            Find <em>your</em> people.
          </p>
          <p className="text-white/60 text-sm mb-2">
            <a href="mailto:contact@evryn.ai" className="hover:text-white transition-colors">
              contact@evryn.ai
            </a>
            {" | "}
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
          <p className="text-white/40 text-sm">
            © 2025 Evryn, Inc.
          </p>
        </footer>

      </div>
    </main>
  );
}
