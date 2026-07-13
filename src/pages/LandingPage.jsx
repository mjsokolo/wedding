import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function LandingPage() {
  return (
    <main className="mx-auto grid w-full max-w-3xl place-items-center gap-4 rounded-[24px] bg-[#f5f1e6] px-6 py-14 text-center shadow-[0_20px_60px_rgba(44,53,35,0.2)] sm:px-10">
      <Header />
      <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)]">
        Lilly & Michael
      </h1>
      <p className="font-sans text-lg text-[#4f5b49]">
        August 29, 2026 • Sheburne Falls, MA
      </p>
      <Link
        className="mt-2 rounded-full bg-[#4b5f41] px-10 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#f7f3e8] shadow-[0_12px_24px_rgba(43,58,38,0.35)] transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
        to="/rsvp"
      >
        RSVP
      </Link>
      <section className="mt-4 w-full rounded-[18px] bg-[#ece7d6] px-6 py-5 text-left font-sans">
        <h2 className="mb-4 text-sm uppercase tracking-[0.12em] text-[#5f4a32]">
          The Vibe
        </h2>
        <p className="text-base text-[#2d2520]">
          We live set back in the woods and the wedding will be outdoors. Please
          come prepared and dressed like you're going on a hike that also has a
          wedding component to it (good luck).
        </p>
      </section>
      <section className="mt-4 w-full rounded-[18px] bg-[#ece7d6] px-6 py-5 text-left font-sans">
        <h2 className="mb-4 text-sm uppercase tracking-[0.12em] text-[#5f4a32]">
          The Day
        </h2>
        <ul className="grid gap-3 text-base text-[#2d2520]">
          <li className="flex items-baseline gap-3">
            <strong className="min-w-[90px] font-semibold">2pm</strong>
            Ceremony
          </li>
          <li className="flex items-baseline gap-3">
            <strong className="min-w-[90px] font-semibold">2:30pm</strong>
            Food & Drinks
          </li>
          <li className="flex items-baseline gap-3">
            <strong className="min-w-[90px] font-semibold">Afterwards</strong>
            Hang out, Lawn Games & Music
          </li>
          <li className="flex items-baseline gap-3">
            <strong className="min-w-[90px] font-semibold">6pm</strong>
            Grilling, Chilling & Camping
          </li>
        </ul>
      </section>
      <p className="text-sm text-[#5e6855]">More details coming soon.</p>
    </main>
  );
}
