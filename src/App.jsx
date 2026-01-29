import { useState } from "react";

const RSVP_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzcD-ZUIME7fG0Df1qzEYUY8LChJ-8AHDrIwFYpNYDgSisfeeFnagdyu5ojQIbABFmK/exec";

const initialForm = {
  fullName: "",
  attending: "",
  guestCount: "1",
  dietaryNotes: "",
  website: "",
  startedAt: ""
};

export default function App() {
  const [view, setView] = useState("landing");
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "guestCount") {
      const cleaned = value.replace(/[^\d]/g, "");
      if (cleaned === "") {
        setForm((prev) => ({ ...prev, [name]: "" }));
        return;
      }
      const numericValue = Number.parseInt(cleaned, 10);
      const clamped = Math.min(Math.max(numericValue, 1), 4);
      setForm((prev) => ({ ...prev, [name]: String(clamped) }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const startedAt = Number.parseInt(form.startedAt, 10);
      const now = Date.now();
      if (Number.isNaN(startedAt) || now - startedAt < 2500) {
        throw new Error("Please wait a moment and try again.");
      }
      if (form.website) {
        throw new Error("Unable to submit. Please try again.");
      }

      if (RSVP_ENDPOINT.startsWith("PASTE_")) {
        throw new Error("Set your Apps Script Web App URL first.");
      }

      const payload = new URLSearchParams(form);

      await fetch(RSVP_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: payload
      });

      setStatus({
        state: "success",
        message: "Thanks! Your RSVP has been received."
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "Something went wrong."
      });
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff6ed,_#efe4d6)] px-6 py-12 text-[#2d2520]">
      {view === "landing" ? (
        <main className="relative mx-auto grid w-full max-w-3xl place-items-center gap-4 rounded-[24px] bg-[#fff9f2] px-6 py-14 text-center shadow-[0_20px_60px_rgba(62,45,35,0.15)] sm:px-10">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#6a5a50]">
            Save the Date
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)]">
            Lilly & Michael
          </h1>
          <p className="font-sans text-lg text-[#6a5a50]">
            August 22, 2026 • Sheburne Falls, MA
          </p>
          <button
            className="mt-4 rounded-full bg-[#7b4e3a] px-10 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[0_12px_24px_rgba(123,78,58,0.35)] transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
            type="button"
            onClick={() => setView("rsvp")}
          >
            RSVP
          </button>
          <section className="mt-8 w-full rounded-[18px] bg-[#fff3e7] px-7 py-6 text-left font-sans">
            <h2 className="mb-4 text-sm uppercase tracking-[0.12em] text-[#7b4e3a]">
              The Vibe
            </h2>
            <p className="text-base text-[#2d2520]">
              This celebration is all about our love of seals and other animals.
              Expect a playful, cozy day filled with marine-inspired touches,
              animal stories, and plenty of warmth.
            </p>
          </section>
          <section className="mt-8 w-full rounded-[18px] bg-[#fff3e7] px-7 py-6 text-left font-sans">
            <h2 className="mb-4 text-sm uppercase tracking-[0.12em] text-[#7b4e3a]">
              The Day
            </h2>
            <ul className="grid gap-3 text-base text-[#2d2520]">
              <li className="flex items-baseline gap-3">
                <strong className="min-w-[90px] font-semibold">2:00 PM</strong>
                Ceremony
              </li>
              <li className="flex items-baseline gap-3">
                <strong className="min-w-[90px] font-semibold">3:00 PM</strong>
                Food & toasts
              </li>
              <li className="flex items-baseline gap-3">
                <strong className="min-w-[90px] font-semibold">After</strong>
                Hang out, then camping + grilling into the evening
              </li>
            </ul>
          </section>
          <section className="mt-6 w-full rounded-[18px] bg-[#fff3e7] px-7 py-6 text-left font-sans">
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
          </section>
          <p className="text-sm text-[#6a5a50]">More details coming soon.</p>
        </main>
      ) : (
        <main className="relative mx-auto w-full max-w-3xl rounded-[24px] bg-[#fff9f2] px-6 py-14 text-left shadow-[0_20px_60px_rgba(62,45,35,0.15)] sm:px-10">
          <button
            className="absolute left-6 top-6 font-sans text-sm text-[#6a5a50]"
            type="button"
            onClick={() => setView("landing")}
          >
            ← Back
          </button>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#6a5a50]">
            RSVP
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)]">
            We can’t wait to celebrate with you.
          </h2>
          <form
            className="mt-8 grid gap-5 font-sans"
            onSubmit={handleSubmit}
            onFocus={() =>
              setForm((prev) => ({
                ...prev,
                startedAt: prev.startedAt || String(Date.now())
              }))
            }
          >
            <label className="grid gap-2 text-sm">
              <span>Full name</span>
              <input
                name="fullName"
                type="text"
                placeholder="Robert Francis Prevost"
                value={form.fullName}
                onChange={handleChange}
                required
                className="rounded-[14px] border border-[#d9c9b8] bg-[#fffdf9] px-4 py-3 text-base"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span>Will you attend?</span>
              <select
                name="attending"
                value={form.attending}
                onChange={handleChange}
                className="rounded-[14px] border border-[#d9c9b8] bg-[#fffdf9] px-4 py-3 text-base"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="ceremony-lunch">
                  Yes, ceremony & lunch only.
                </option>
                <option value="evening-only">
                  Yes, evening party only.
                </option>
                <option value="both">Yes, we’ll be there for both!</option>
                <option value="no">Sadly, we can’t make it.</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm">
              <span>Guest count</span>
              <input
                name="guestCount"
                type="number"
                min="1"
                max="4"
                inputMode="numeric"
                pattern="\\d*"
                step="1"
                value={form.guestCount}
                onChange={handleChange}
                required
                className="rounded-[14px] border border-[#d9c9b8] bg-[#fffdf9] px-4 py-3 text-base"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span>Dietary notes (optional)</span>
              <textarea
                name="dietaryNotes"
                rows="3"
                placeholder="Allergies or preferences"
                value={form.dietaryNotes}
                onChange={handleChange}
                className="resize-y rounded-[14px] border border-[#d9c9b8] bg-[#fffdf9] px-4 py-3 text-base"
              />
            </label>
            <div className="sr-only" aria-hidden="true">
              <label>
                Leave this field blank
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>
            <input type="hidden" name="startedAt" value={form.startedAt} />
            <button
              className="rounded-full bg-[#7b4e3a] px-10 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[0_12px_24px_rgba(123,78,58,0.35)] transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
              type="submit"
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Sending..." : "Submit RSVP"}
            </button>
            {status.state !== "idle" && (
              <p
                className={`text-sm ${
                  status.state === "success" ? "text-[#2d5a3a]" : "text-[#8b2a2a]"
                }`}
              >
                {status.message}
              </p>
            )}
            <p className="text-xs text-[#7b6a60]">
              Your RSVP is private. We only use this to plan the celebration.
            </p>
          </form>
        </main>
      )}
    </div>
  );
}
