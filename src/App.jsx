import { useState } from "react";
import "./App.css";

const RSVP_ENDPOINT = "https://script.google.com/macros/s/AKfycbzcD-ZUIME7fG0Df1qzEYUY8LChJ-8AHDrIwFYpNYDgSisfeeFnagdyu5ojQIbABFmK/exec";

const initialForm = {
  fullName: "",
  attending: "yes",
  guestCount: "1",
  dietaryNotes: ""
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
        message:
          error instanceof Error ? error.message : "Something went wrong."
      });
    }
  };

  return (
    <div className="page">
      {view === "landing" ? (
        <main className="hero">
          <p className="eyebrow">Save the Date</p>
          <h1 className="title">Lilly & Michael</h1>
        <p className="subtitle">August 22, 2026 • Sheburne Falls, MA</p>
        <button
          className="rsvp-button"
          type="button"
          onClick={() => setView("rsvp")}
        >
          RSVP
        </button>
        <section className="schedule">
          <h2 className="section-title">The Day</h2>
          <ul>
            <li>
              <strong>2:00 PM</strong> Ceremony
            </li>
            <li>
              <strong>3:00 PM</strong> Food & toasts
            </li>
            <li>
              <strong>After</strong> Hang out, then camping + grilling into the evening
            </li>
          </ul>
        </section>
        <p className="note">More details coming soon.</p>
      </main>
      ) : (
        <main className="hero rsvp">
          <button className="back-link" type="button" onClick={() => setView("landing")}>
            ← Back
          </button>
          <p className="eyebrow">RSVP</p>
          <h2 className="title small">We can’t wait to celebrate with you.</h2>
          <form className="rsvp-form" onSubmit={handleSubmit}>
            <label className="field">
              <span>Full name</span>
              <input
                name="fullName"
                type="text"
                placeholder="Robert Francis Prevost"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </label>
            <label className="field">
              <span>Will you attend?</span>
              <select
                name="attending"
                value={form.attending}
                onChange={handleChange}
              >
                <option value="yes">Yes, can’t wait!</option>
                <option value="no">Sadly, no</option>
              </select>
            </label>
            <label className="field">
              <span>Guest count</span>
              <input
                name="guestCount"
                type="number"
                min="1"
                max="6"
                inputMode="numeric"
                pattern="\\d*"
                step="1"
                value={form.guestCount}
                onChange={handleChange}
                required
              />
            </label>
            <label className="field">
              <span>Dietary notes (optional)</span>
              <textarea
                name="dietaryNotes"
                rows="3"
                placeholder="Allergies or preferences"
                value={form.dietaryNotes}
                onChange={handleChange}
              />
            </label>
            <button className="rsvp-button" type="submit" disabled={status.state === "loading"}>
              {status.state === "loading" ? "Sending..." : "Submit RSVP"}
            </button>
            {status.state !== "idle" && (
              <p className={`status ${status.state}`}>{status.message}</p>
            )}
            <p className="privacy">
              Your RSVP is private. We only use this to plan the celebration.
            </p>
          </form>
        </main>
      )}
    </div>
  );
}
