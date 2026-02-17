import { WaitlistForm } from "@/components/waitlist-form";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#6DBAC4] to-[#5AABB8] relative z-[2]">

      {/* Sticky Header — matches top of gradient, separates naturally as page darkens below */}
      <header className="sticky top-0 z-30 bg-[#6DBAC4] pt-3 pb-1 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl md:text-3xl font-light text-white tracking-[0.12em]">
            Evryn
          </Link>
          <a
            href="#waitlist"
            className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-light transition-colors hover:bg-white/15"
          >
            Join waitlist
          </a>
        </div>
      </header>

      {/* Hero: Seed of Life + Tagline */}
      <section className="text-center mb-6 px-6">
        {/* Logo has higher z-index than header — scrolls OVER it */}
        <div className="-mt-8 md:-mt-12 mb-0 md:mb-1 relative z-40">
          <Image
            src="/seed-of-life.svg"
            alt="Seed of Life"
            width={240}
            height={240}
            className="mx-auto md:w-[320px] md:h-[320px]"
            priority
          />
        </div>
        <div className="text-xl md:text-2xl text-white/90 leading-relaxed md:leading-[1.8] max-w-3xl mx-auto mb-6">
          <p className="text-2xl md:text-3xl font-normal">Imagine{"\u2006"}<span className="text-[rgba(194,89,59,0.9)] tracking-[0.1em]">...</span></p>
          <p>if every time you needed someone</p>
          <p className="py-2 md:py-3">for <em>anything</em></p>
          <p>you had a trusted friend</p>
          <p>who really knew you</p>
          <p className="pb-2 md:pb-3">and she'd just</p>
          <p>find you the right person.</p>
          <p className="pt-3 md:pt-4">And not <em>just</em> the best fit for you</p>
          <p>but <em>also</em> someone she <em><span className="underline">trusted</span></em> enough</p>
          <p>to bring into your life.</p>
        </div>
        <p className="text-2xl md:text-3xl text-white font-normal">
          Evryn is your personal AI
        </p>
        <p className="text-2xl md:text-3xl text-white font-normal">
          who finds you <em>your</em> people.
        </p>
      </section>

      {/* Three Pillars */}
      <section className="mb-12 md:mb-16 pt-4 px-6 md:px-10">
        <div className="max-w-6xl mx-auto border-t border-white/20 pt-8">
          <p className="text-2xl md:text-3xl font-normal text-white/90 mb-8">It's easy<span className="text-[rgba(194,89,59,0.9)] tracking-[0.1em]">...</span></p>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">

            {/* Pillar 1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-normal text-white mb-3">
                You just talk to Evryn
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                She listens, she gets to know you, and she discovers what you actually need. No searching. No swiping. No profiles to build.
              </p>
            </div>

            {/* Pillar 2 */}
            <div>
              <h2 className="text-xl md:text-2xl font-normal text-white mb-3">
                She finds you <em>your</em> people
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                Just the right fit: soulmate, cofounder, crew, someone fun — even just the right tutor, or just someone to buy an old couch. Not <em>more</em> options. The <em>right</em> ones.
              </p>
            </div>

            {/* Pillar 3 */}
            <div>
              <h2 className="text-xl md:text-2xl font-normal text-white mb-3">
                She guards your gates
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                No public profile and no open messaging means there's simply no way for pesterers, creeps, spammers, or scammers to even know you exist. Evryn only connects you to someone if she trusts them enough.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Evryn speaks — voice shift to first person, inset like a personal note */}
      <section className="mb-10 md:mb-12 py-8 px-10 md:px-10">
        <div className="max-w-xl mx-auto border-t border-b border-white/20 py-8">
          <p className="text-2xl md:text-3xl font-normal text-white/90 italic leading-relaxed mb-4">
            I promise{"\u2006"}<span className="text-[rgba(194,89,59,0.9)] tracking-[0.1em] not-italic">...</span>
          </p>
          <div className="text-base md:text-lg text-white/80 italic leading-relaxed space-y-4">
            <p>I take my time with the people I care about — so I'll never connect you to someone I don't personally trust.</p>
            <p>And you don't pay a penny unless a connection genuinely works — and <span className="underline">you</span> decide the price. Because I would only connect you to others if I trusted you <span className="underline">that</span> <span className="underline">much</span>.</p>
            <p>Trust is sacred to me. I've got your back.</p>
            <p className="pt-2">I can't wait to meet you!</p>
          </div>
          <p className="text-base md:text-lg text-white/80 italic mt-4">— Evryn</p>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="text-center mb-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-xl mx-auto border border-white/20">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 px-6 md:px-10">
        <div className="max-w-6xl mx-auto border-t border-white/20 pt-8 pb-12 md:pb-20 text-center">
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
            © 2025–2026 Evryn, Inc.
          </p>
        </div>
      </footer>

    </main>
  );
}
