import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <nav className="flex flex-wrap items-center justify-center gap-3 font-sans text-sm text-[#4b5f41]">
        <NavLink className="underline underline-offset-4" to="/" end>
          Home
        </NavLink>
        <span className="text-[#c4a54a]">•</span>
        <NavLink className="underline underline-offset-4" to="/directions">
          Directions &amp; Parking
        </NavLink>
        <span className="text-[#c4a54a]">•</span>
        <NavLink className="underline underline-offset-4" to="/what-to-expect">
          What to Expect
        </NavLink>
        <span className="text-[#c4a54a]">•</span>
        {/* <NavLink className="underline underline-offset-4" to="/gifts">
          Gifts
        </NavLink>
        <span className="text-[#c9b9a8]">•</span> */}
        <NavLink className="underline underline-offset-4" to="/rsvp">
          RSVP
        </NavLink>
      </nav>
    </header>
  );
}
