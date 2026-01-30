import Header from "./Header.jsx";

export default function RsvpForm({
  form,
  status,
  onChange,
  onSubmit,
  onStart,
  onNavigate,
  onRsvpClick,
  active
}) {
  return (
    <main className="mx-auto w-full max-w-3xl rounded-[24px] bg-[#fff9f2] px-6 py-14 text-left shadow-[0_20px_60px_rgba(62,45,35,0.15)] sm:px-10">
      <Header
        active={active}
        onNavigate={onNavigate}
        onRsvpClick={onRsvpClick}
        showRsvpLabel
      />
      <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)]">
        We can’t wait to celebrate with you.
      </h2>
      <form className="mt-8 grid gap-5 font-sans" onSubmit={onSubmit} onFocus={onStart}>
        <label className="grid gap-2 text-sm">
          <span>Full name</span>
          <input
            name="fullName"
            type="text"
            placeholder="Robert Francis Prevost"
            value={form.fullName}
            onChange={onChange}
            required
            className="rounded-[14px] border border-[#d9c9b8] bg-[#fffdf9] px-4 py-3 text-base"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span>Will you attend?</span>
          <select
            name="attending"
            value={form.attending}
            onChange={onChange}
            className="rounded-[14px] border border-[#d9c9b8] bg-[#fffdf9] px-4 py-3 text-base"
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="ceremony-lunch">Yes, ceremony & lunch only.</option>
            <option value="evening-only">Yes, evening party only.</option>
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
            onChange={onChange}
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
            onChange={onChange}
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
              onChange={onChange}
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
  );
}
