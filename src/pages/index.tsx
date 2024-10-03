import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

const Index = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col bg-slate-950">
      {/* <NavBar /> */}
      <Hero />
      <Experience />
      <Hero />
    </div>
  );
};

export default Index;
