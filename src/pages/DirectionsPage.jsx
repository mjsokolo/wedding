import InfoPage from "../components/InfoPage.jsx";
import WeddingMap from "../components/WeddingMap.jsx";
import detourMap from "../assets/detour-map.jpg";

export default function DirectionsPage() {
  return (
    <InfoPage title="Directions & Parking">
      <div className="grid gap-8">
        <section>
          <h3 className="font-serif text-xl">Getting There</h3>
          <p className="mt-2">
            The wedding will take place at our home at <b>241 Barnard Road, 
            Shelburne Falls, MA 01370</b>. After driving on Rte 2 West,
            you&apos;ll need to follow the detour signs to make the proper
            turn to avoid getting stuck behind the bridge repairs.
            Here&apos;s a map you can follow:
          </p>
          <img
            src={detourMap}
            alt="Detour map showing the route from Rte 2 West to 241 Barnard Road, Shelburne Falls, MA"
            className="mx-auto mt-4 w-full max-w-sm rounded-[16px] shadow-[0_12px_30px_rgba(44,53,35,0.25)]"
          />
        </section>
        <section>
          <h3 className="font-serif text-xl">Parking</h3>
          <p className="mt-2">
            Our home is located on the right side of the road down a long
            gravel driveway. Park along the left side of the road opposite
            our home (there will be signs showing you where) and then walk
            on driveway to our home. The walk from parking to the ceremony
            is about 1,000 feet, down and up a hill. If that&apos;s more
            than you&apos;d like to tackle, just let us know! We can
            arrange to have you pull in and we can re-park your car.
          </p>
          <WeddingMap />
        </section>
      </div>
    </InfoPage>
  );
}
