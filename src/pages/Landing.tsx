import Header from "../components/header";
import HeroCarousel from "../components/hero-carousel";
import DonationStats from "../components/donation-stats";
import FeaturedWish from "../components/featured-wish";
import { charities, type Charity, type Wish } from '../lib/data';
import Faq from "../components/faq";
import Footer from "../components/footer";

const findFeaturedWish = () => {
  let featuredWish: Wish | null = null;
  let featuredCharity: Charity | null = null;
  let highestProgress = -1;

  charities.forEach((charity) => {
    charity.wishes.forEach((wish) => {
      const progress = (wish.quantityDonated / wish.quantityNeeded) * 100;
      if (progress < 100 && progress > highestProgress) {
        highestProgress = progress;
        featuredWish = wish;
        featuredCharity = charity;
      }
    });
  });

  return { wish: featuredWish, charity: featuredCharity };
};
export default function Landing() {
   const { wish, charity } = findFeaturedWish();
  return(
    <section>
        <Header variant="dark" />
         <HeroCarousel />
          <DonationStats />
          {wish && charity && (
          <FeaturedWish wish={wish} charity={charity} />
        )}
        <Faq />
        <Footer />
    </section>

  )
}