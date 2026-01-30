import Header from "./Header.jsx";

export default function InfoPage({ title, children, onNavigate, onRsvpClick, active }) {
  return (
    <main className="mx-auto w-full max-w-3xl rounded-[24px] bg-[#fff9f2] px-6 py-14 text-left shadow-[0_20px_60px_rgba(62,45,35,0.15)] sm:px-10">
      <Header
        active={active}
        onNavigate={onNavigate}
        onRsvpClick={onRsvpClick}
      />
      <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3rem)]">{title}</h2>
      <div className="mt-6 font-sans text-base text-[#2d2520] leading-relaxed">
        {children}
      </div>
    </main>
  );
}
