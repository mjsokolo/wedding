import InfoPage from "../components/InfoPage.jsx";
import WeddingMap from "../components/WeddingMap.jsx";
import bathroomOutside from "../assets/bathroom-outside.webp";
import bathroomInside from "../assets/bathroom-inside.webp";
import weddingShoes from "../assets/wedding-shoes.webp";

export default function WhatToExpectPage() {
  return (
    <InfoPage title="What to Expect">
      <div className="grid gap-8">
        <section>
          <h3 className="font-serif text-xl">
            What&apos;s the Format of this Wedding?
          </h3>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>2pm ceremony</li>
            <li>2:30 ish, reception in the reception tent</li>
            <li>Afterward there will be music and chilling</li>
            <li>6:00pm, fire, grilling, and camping</li>
          </ul>
        </section>
        <section>
          <h3 className="font-serif text-xl">When should I arrive?</h3>
          <p className="mt-2">
            The ceremony will begin at 2:00 p.m. We invite you to arrive between
            1:00 and 1:30 p.m. to make your way up to the house and ceremony
            area. It's about a 1000-foot walk, see{" "}
            <button
              type="button"
              className="underline underline-offset-4"
              onClick={() =>
                document
                  .getElementById("venue-map")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              map below
            </button>
            . We&apos;ll have refreshments and bug spray (the essentials!)
            available while you mingle and socialize before our officiant
            invites everyone to take their seats.
          </p>
        </section>
        <section>
          <h3 className="font-serif text-xl">
            I&apos;m not up for walking from the street to the ceremony. Can I
            arrange to drive directly there?
          </h3>
          <p className="mt-2">
            Yes! If you can let us know in advance, that would be great, or just
            let us know the day of. We will have someone to re-park your car or we'll set
            aside space closer to the house where you can park.
          </p>
        </section>
        <section>
          <h3 className="font-serif text-xl">What should I wear?</h3>
          <p className="mt-2">
            Don&apos;t be scared to wear comfortable clothes that you would wear
            on a hike. Our home is in the woods and the terrain will be a mix of
            grass, gravel, dirt, and woods. Please wear comfortable shoes!{" "}
            <strong className="italic">
              For context, these are shoes the bride will be wearing:
            </strong>
          </p>
          <img
            src={weddingShoes}
            alt="The bride's hiking boots she'll be wearing at the wedding"
            className="mx-auto mt-4 w-full max-w-xs rounded-[16px] shadow-[0_12px_30px_rgba(44,53,35,0.25)]"
          />
        </section>
        <section>
          <h3 className="font-serif text-xl">How else should I prepare?</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              This is an outdoor wedding. If there&apos;s rain, we will have
              the ceremony in the reception tent, but it would still be wise to bring an
              umbrella and rain coat just in case.
            </li>
            <li>We will provide bug spray and sunblock if you need it!</li>
            <li>If you're staying for late night chilling or camping, bring a comfortable camp chair and tent.</li>
            <li>You're welcome to bring late-night drinks & snacks, instruments, and games to share with folks around the campfire.</li>
          </ul>
        </section>
        <section>
          <h3 className="font-serif text-xl">
            What&apos;s the bathroom situation?
          </h3>
          <p className="mt-2">
            We&apos;ll have fancy portable bathrooms with running water and
            electricity! They will be available to folks for the whole day and those brave enough to camp overnight.
          </p>
          <div className="mx-auto mt-4 grid max-w-md grid-cols-2 gap-4">
            <img
              src={bathroomOutside}
              alt="Outside of the portable bathroom"
              className="w-full rounded-[16px] shadow-[0_12px_30px_rgba(44,53,35,0.25)]"
            />
            <img
              src={bathroomInside}
              alt="Inside of the portable bathroom"
              className="w-full rounded-[16px] shadow-[0_12px_30px_rgba(44,53,35,0.25)]"
            />
          </div>
        </section>
        <section>
          <h3 className="font-serif text-xl">What about Gifts or Registry?</h3>
          <p className="mt-2">
            No gifts or registry for this event, just bring you! If you really
            want to, you can bring a drinks, lawn games, snacks, or smores
            material for the campfire and hanging out after the main event,
            although there will be plenty of drinks and grilled food too.
          </p>
        </section>
        <section>
          <h3 className="font-serif text-xl">
            I&apos;m planning to camp. What do I need to know?
          </h3>
          <p className="mt-2">
            You can camp anywhere on the map below! Just drop off your gear on
            the porch before the ceremony and you can set up after the
            reception.
          </p>
          <WeddingMap />
        </section>
      </div>
    </InfoPage>
  );
}
