import { useState } from "react";
import Landing from "./components/Landing.jsx";
import RsvpForm from "./components/RsvpForm.jsx";
import InfoPage from "./components/InfoPage.jsx";

const RSVP_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzcD-ZUIME7fG0Df1qzEYUY8LChJ-8AHDrIwFYpNYDgSisfeeFnagdyu5ojQIbABFmK/exec";

const initialForm = {
  fullName: "",
  attending: "",
  camping: "",
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

  const handleStart = () => {
    setForm((prev) => ({
      ...prev,
      startedAt: prev.startedAt || String(Date.now())
    }));
  };

  const handleNavigate = (next) => {
    setView(next);
  };

  const handleRsvpClick = () => setView("rsvp");

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff6ed,_#efe4d6)] px-6 py-12 text-[#2d2520]">
      {view === "landing" && (
        <Landing
          active={view}
          onNavigate={handleNavigate}
          onRsvpClick={handleRsvpClick}
        />
      )}
      {view === "rsvp" && (
        <RsvpForm
          active={view}
          form={form}
          status={status}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onStart={handleStart}
          onNavigate={handleNavigate}
          onRsvpClick={handleRsvpClick}
        />
      )}
      {view === "directions" && (
        <InfoPage
          active={view}
          title="Directions"
          onNavigate={handleNavigate}
          onRsvpClick={handleRsvpClick}
        >
          Please check back soon for detailed directions to the venue.
        </InfoPage>
      )}
      {view === "gifts" && (
        <InfoPage
          active={view}
          title="Gifts"
          onNavigate={handleNavigate}
          onRsvpClick={handleRsvpClick}
        >
          In lieu of gifts, please consider a donation to the Center for New
          Americans at cnam.org.
        </InfoPage>
      )}
      {view === "parking" && (
        <InfoPage
          active={view}
          title="Parking"
          onNavigate={handleNavigate}
          onRsvpClick={handleRsvpClick}
        >
          Parking information will be shared closer to the date.
        </InfoPage>
      )}
    </div>
  );
}
