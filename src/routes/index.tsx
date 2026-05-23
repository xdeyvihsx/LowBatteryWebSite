import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/sections/Header";
import { MainContent } from "@/sections/MainContent";
import { Footer } from "@/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "LowBatteryWebSite" },
      { name: "description", content: "LowBatteryWebSite" },
    ],
  }),
});

function Index() {
  return (
    <div className="text-black text-base accent-auto box-border caret-transparent block tracking-[normal] leading-[18.4px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start normal-case visible w-full mt-20 font-times_new_roman">
      <MainContent />
      <Header />
      <Footer />
      <div className="fixed box-border caret-transparent text-center w-full z-[1000] left-0 bottom-0"></div>
    </div>
  );
}
