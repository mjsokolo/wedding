import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import weddingMap from "../assets/wedding-map.webp";

const PINS = [
  {
    id: "Reception",
    x: 22,
    y: 50,
    label: "Reception Tent",
    description: "Gather here after the ceremony for the reception",
  },
  {
    id: "parking-area",
    x: 63,
    y: 96,
    label: "Parking Area",
    description: "Park cars along this of the road opposite the driveway",
  },
  {
    id: "driveway",
    x: 57,
    y: 86,
    label: "Driveway",
    description: "Walk on down the driveway to the house",
  },
  {
    id: "Bathroom",
    x: 67,
    y: 47,
    label: "Bathroom",
    description: "Fancy Bathrooms!",
  },
  {
    id: "house",
    x: 84,
    y: 45,
    label: "Our House",
    description:
      "If you have camping gear, you can leave the gear here during the ceromony. We'll also have a bugspray station",
  },
  {
    id: "ceremony",
    x: 53,
    y: 18,
    label: "Ceremony Field",
    description: "Meet here at 2pm for the ceremony",
  },
];

export default function WeddingMap() {
  return (
    <div id="venue-map" className="relative mx-auto mt-4 w-full max-w-2xl">
      <img
        src={weddingMap}
        alt="Map of the venue grounds showing parking, the ceremony spot, and other points of interest"
        className="w-full rounded-[16px] shadow-[0_12px_30px_rgba(44,53,35,0.25)]"
      />
      {PINS.map((pin) => (
        <button
          key={pin.id}
          type="button"
          className="group absolute -translate-x-1/2 -translate-y-full cursor-pointer text-[#c4a54a] transition-transform duration-150 hover:scale-110 hover:text-[#d9bb5e] focus-visible:scale-110 focus-visible:text-[#d9bb5e]"
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
          data-tooltip-id="wedding-map-tooltip"
          data-pin-label={pin.label}
          data-pin-description={pin.description}
          aria-label={pin.label}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-9 w-9 drop-shadow-[0_3px_4px_rgba(0,0,0,0.45)]"
          >
            <path
              stroke="#f7f3e8"
              strokeWidth="1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
            />
          </svg>
        </button>
      ))}
      <Tooltip
        id="wedding-map-tooltip"
        openOnClick
        clickable
        className="max-w-[220px]"
        render={({ activeAnchor }) => (
          <div>
            <strong>{activeAnchor?.getAttribute("data-pin-label")}</strong>
            <div>{activeAnchor?.getAttribute("data-pin-description")}</div>
          </div>
        )}
      />
    </div>
  );
}
