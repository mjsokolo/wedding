import { useState } from "react";
import Header from "../components/Header.jsx";

const RSVP_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzcD-ZUIME7fG0Df1qzEYUY8LChJ-8AHDrIwFYpNYDgSisfeeFnagdyu5ojQIbABFmK/exec";

const initialForm = {
  fullName: "",
  attending: "",
  camping: "",
  hasGuests: "",
  guestName: "",
  dietaryNotes: "",
  website: "",
  startedAt: "",
};

export default function RsvpPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleStart = () => {
    setForm((prev) => ({
      ...prev,
      startedAt: prev.startedAt || String(Date.now()),
    }));
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
        body: payload,
      });

      setStatus({
        state: "success",
        message: "Thanks! Your RSVP has been received.",
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error ? error.message : "Something went wrong.",
      });
    }
  };

  return (
    <main className="mx-auto w-full max-w-3xl rounded-[24px] bg-[#f5f1e6] px-6 py-14 text-left shadow-[0_20px_60px_rgba(44,53,35,0.2)] sm:px-10">
      <Header />
      <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)]">
        We can’t wait to celebrate with you.
      </h2>
      <form
        className="mt-8 grid gap-5 font-sans"
        onSubmit={handleSubmit}
        onFocus={handleStart}
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
            className="rounded-[14px] border border-[#b7b49f] bg-[#fbf8ef] px-4 py-3 text-base"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span>Will you attend?</span>
          <select
            name="attending"
            value={form.attending}
            onChange={handleChange}
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
            onChange={handleChange}
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
            If you&apos;re attending with a partner, children, or a guest,
            please select &ldquo;Yes&rdquo; and list each person&apos;s name
            below.
          </p>
        </label>
        <label className="grid gap-2 text-sm">
          <span>Guest name(s) (if attending with you)</span>
          <input
            name="guestName"
            type="text"
            placeholder="Guest full name(s)"
            value={form.guestName}
            onChange={handleChange}
            className="rounded-[14px] border border-[#b7b49f] bg-[#fbf8ef] px-4 py-3 text-base"
          />
        </label>
        <label className="grid gap-2 text-sm">
          <span>Will you be camping?</span>
          <select
            name="camping"
            value={form.camping}
            onChange={handleChange}
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
            onChange={handleChange}
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
              onChange={handleChange}
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
