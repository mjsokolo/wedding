import Header from "./Header.jsx";

export default function Landing({ active, onNavigate, onRsvpClick }) {
  return (
    <main className="mx-auto grid w-full max-w-3xl place-items-center gap-4 rounded-[24px] bg-[#fff9f2] px-6 py-14 text-center shadow-[0_20px_60px_rgba(62,45,35,0.15)] sm:px-10">
      <Header
        active={active}
        onNavigate={onNavigate}
        onRsvpClick={onRsvpClick}
      />
      <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)]">
        Lilly & Michael
      </h1>
      <p className="font-sans text-lg text-[#6a5a50]">
        August 22, 2026 • Sheburne Falls, MA
      </p>
      <button
        className="mt-2 rounded-full bg-[#7b4e3a] px-10 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[0_12px_24px_rgba(123,78,58,0.35)] transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
        type="button"
        onClick={onRsvpClick}
      >
        RSVP
      </button>
      <section className="mt-4 w-full rounded-[18px] bg-[#fff3e7] px-6 py-5 text-left font-sans">
        <h2 className="mb-4 text-sm uppercase tracking-[0.12em] text-[#7b4e3a]">
          The Vibe
        </h2>
        <p className="text-base text-[#2d2520]">
          We live set back in the woods and the wedding will be outdoors. 
          Please come prepared and dressed like you're going on a hike that also has a wedding component to it (good luck).
        </p>
      </section>
      <section className="mt-4 w-full rounded-[18px] bg-[#fff3e7] px-6 py-5 text-left font-sans">
        <h2 className="mb-4 text-sm uppercase tracking-[0.12em] text-[#7b4e3a]">
          The Day
        </h2>
        <ul className="grid gap-3 text-base text-[#2d2520]">
          <li className="flex items-baseline gap-3">
            <strong className="min-w-[90px] font-semibold">Afternoon</strong>
            Ceremony
          </li>
          <li className="flex items-baseline gap-3">
            <strong className="min-w-[90px] font-semibold">After</strong>
            Food & Drinks
          </li>
          <li className="flex items-baseline gap-3">
            <strong className="min-w-[90px] font-semibold">Late</strong>
            Hang out, then camping + grilling into the evening
          </li>
        </ul>
      </section>
      {/* <section className="mt-4 w-full rounded-[18px] bg-[#fff3e7] px-6 py-5 text-left font-sans">
        <h2 className="mb-3 text-sm uppercase tracking-[0.12em] text-[#7b4e3a]">
          Gifts
        </h2>
        <p className="text-base text-[#2d2520]">
          In lieu of gifts, please make a donation to the Center for New
          Americans at{" "}
          <a
            href="https://cnam.org/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#7b4e3a] underline underline-offset-4"
          >
            cnam.org
          </a>
          .
        </p>
      </section> */}
      <p className="text-sm text-[#6a5a50]">More details coming soon.</p>
    </main>
  );
}
