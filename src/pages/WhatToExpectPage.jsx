import InfoPage from "../components/InfoPage.jsx";

export default function WhatToExpectPage() {
  return (
    <InfoPage title="What to Expect">
      <div className="grid gap-8">
        <section>
          <h3 className="font-serif text-xl">Schedule & Format</h3>
          <p className="mt-2">
            This won&apos;t be a typical wedding! [Brief description of the
            ceremony/reception flow — e.g. daytime ceremony, evening party,
            overnight camping]. A detailed schedule will be shared closer to
            the date.
          </p>
        </section>
        <section>
          <h3 className="font-serif text-xl">Camping & Overnight</h3>
          <p className="mt-2">
            Planning to camp with us? Bring a tent (or let us know if you
            need to borrow one), a sleeping bag, and layers for overnight
            temperatures. Bathrooms and [showers/facilities] are located at
            [location], and we ask for quiet hours after [time].
          </p>
        </section>
        <section>
          <h3 className="font-serif text-xl">Attire & Weather</h3>
          <p className="mt-2">
            Think [dress code, e.g. "casual and outdoor-ready"] rather than
            formalwear — comfortable shoes are a must since we'll be on
            [grass/dirt/trails]. Weather in [month] tends to be [expected
            conditions], so pack layers and something for rain just in
            case.
          </p>
        </section>
        <section>
          <h3 className="font-serif text-xl">Kids, Pets & Alcohol</h3>
          <p className="mt-2">
            [Kids are welcome / this is an adults-only celebration]. [Pets
            are welcome if leashed / we ask that you leave pets at home].
            [The bar will be stocked with X / this is a BYOB event] — let us
            know if you have questions.
          </p>
        </section>
      </div>
    </InfoPage>
  );
}
