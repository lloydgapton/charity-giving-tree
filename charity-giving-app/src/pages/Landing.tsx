import Header from "../components/header";
import HeroCarousel from "../components/hero-carousel";
import DonationStats from "../components/donation-stats";

export default function Landing() {
  return(
    <section>
        <Header variant="dark" />
         <HeroCarousel />
          <DonationStats />
    </section>

  )
}