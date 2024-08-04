import Hero1 from "@/components/Hero1";
import { Hero3 } from "@/components/Hero3";
import Hero4 from "@/components/Hero4";
import Hero from "@/components/Landingpage/Hero";




export default function Home() {
  return (
    <main className="">
      <div >
        <Hero />
      </div>
      <div>
        <Hero1 />
      </div>

      {/* <div className="hidden lg:block">
        <Hero3 />
      </div>
      <div className="lg:hidden">
        <Hero4 />
      </div> */}
    </main>
  );
}
