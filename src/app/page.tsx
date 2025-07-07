import Categ from "@/components/Categ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="container py-4">
      <Header/>
      <Hero/>
      <Categ/>
      <Footer/>
    </div>
  );
}
