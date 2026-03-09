export default function Header({
  active,
  onNavigate,
  showRsvpLabel = false,
  onRsvpClick
}) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <nav className="flex flex-wrap items-center justify-center gap-3 font-sans text-sm text-[#4b5f41]">
        <button
          className="underline underline-offset-4"
          type="button"
          onClick={() => onNavigate("landing")}
          aria-current={active === "landing" ? "page" : undefined}
        >
          Home
        </button>
        <span className="text-[#c4a54a]">•</span>
        {/* <button
          className="underline underline-offset-4"
          type="button"
          onClick={() => onNavigate("directions")}
          aria-current={active === "directions" ? "page" : undefined}
        >
          Directions
        </button> */}
        {/* <span className="text-[#c9b9a8]">•</span>
        <button
          className="underline underline-offset-4"
          type="button"
          onClick={() => onNavigate("gifts")}
          aria-current={active === "gifts" ? "page" : undefined}
        >
          Gifts
        </button>
        <span className="text-[#c9b9a8]">•</span> */}
        {/* <button
          className="underline underline-offset-4"
          type="button"
          onClick={() => onNavigate("parking")}
          aria-current={active === "parking" ? "page" : undefined}
        >
          Parking
        </button>
        <span className="text-[#c9b9a8]">•</span> */}
        <button
          className="underline underline-offset-4"
          type="button"
          onClick={onRsvpClick}
          aria-current={active === "rsvp" ? "page" : undefined}
        >
          RSVP
        </button>
      </nav>
    </header>
  );
}
