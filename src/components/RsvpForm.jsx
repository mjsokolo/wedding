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
    <main className="mx-auto w-full max-w-3xl rounded-[24px] bg-[#f5f1e6] px-6 py-14 text-left shadow-[0_20px_60px_rgba(44,53,35,0.2)] sm:px-10">
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
            className="rounded-[14px] border border-[#b7b49f] bg-[#fbf8ef] px-4 py-3 text-base"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span>Will you attend?</span>
          <select
            name="attending"
            value={form.attending}
            onChange={onChange}
            className="rounded-[14px] border border-[#b7b49f] bg-[#fbf8ef] px-4 py-3 text-base"
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
          <span>Will anyone be attending with you?</span>
          <select
            name="hasGuests"
            value={form.hasGuests}
            onChange={onChange}
            required
            className="rounded-[14px] border border-[#b7b49f] bg-[#fbf8ef] px-4 py-3 text-base"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="no">No, just me</option>
            <option value="yes">Yes, one or more guests will join me</option>
          </select>
          <p className="text-xs leading-relaxed text-[#5e6855]">
            If your invitation included additional guest(s), please select
            "Yes" and list each guest&apos;s name below.
          </p>
        </label>
        <label className="grid gap-2 text-sm">
          <span>Guest name(s) (if attending with you)</span>
          <input
            name="guestName"
            type="text"
            placeholder="Guest full name(s)"
            value={form.guestName}
            onChange={onChange}
            className="rounded-[14px] border border-[#b7b49f] bg-[#fbf8ef] px-4 py-3 text-base"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span>Will you be camping?</span>
          <select
            name="camping"
            value={form.camping}
            onChange={onChange}
            className="rounded-[14px] border border-[#b7b49f] bg-[#fbf8ef] px-4 py-3 text-base"
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="maybe">Maybe</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          <span>Dietary notes (optional)</span>
          <textarea
            name="dietaryNotes"
            rows="3"
            placeholder="Allergies or preferences"
            value={form.dietaryNotes}
            onChange={onChange}
            className="resize-y rounded-[14px] border border-[#b7b49f] bg-[#fbf8ef] px-4 py-3 text-base"
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
          className="rounded-full bg-[#4b5f41] px-10 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#f7f3e8] shadow-[0_12px_24px_rgba(43,58,38,0.35)] transition hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
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
        <p className="text-xs text-[#5e6855]">
          Your RSVP is private. We only use this to plan the celebration.
        </p>
      </form>
    </main>
  );
}
