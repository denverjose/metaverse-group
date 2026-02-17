import About from "@/components/about/about";
import BookACallButton from "@/components/book-a-call/book-a-call";
import Development from "@/components/development/development";
import Header from "@/components/header/header";
import ImageCarousel from "@/components/header/image-carousel";
// import Services from "@/components/layout/services/services";

// import About from "../components/about/about-us";

export default async function Home() {
  return (
    <div className="text-primary overflow-hidden">
      <Header />
      {/* <Stats /> */}
      <ImageCarousel />
      <BookACallButton shineDelay={1.2} />
      {/* <Services /> */}
      <Development />
      <BookACallButton shineDelay={1.4} />
      {/* <About /> */}
      <About />
      <BookACallButton shineDelay={1.6} />
      {/* <BookACallButton shineDelay={1.8} /> */}
    </div>
  );
}
