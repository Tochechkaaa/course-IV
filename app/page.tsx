import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Audience } from "./components/Audience/Audience";
import { More } from "./components/More/More";
import { Program } from "./components/Program/Program";
import { Apply } from "./components/Apply/Apply";
import { Speakers } from "./components/Speakers/Speakers";
import { Leaders } from "./components/Leaders/Leaders";
import { Format } from "./components/Format/Format";
import { Price } from "./components/Price/Price";
import { Faq } from "./components/Faq/Faq";
import { Cta } from "./components/Cta/Cta";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Audience />
        <More />
        <Program />
        <Apply />
        <Speakers />
        <Leaders />
        <Format />
        <Price />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
