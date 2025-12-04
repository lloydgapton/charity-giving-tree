import { findImage, type ImageWithText } from "../lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/swiper-bundle.css";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const heroImageIds: ImageWithText[] = [
  {
    id: "hero-1",
    text: "Fill a Plate, Warm a Heart: Your Gift Makes an Immediate Impact."
  },
  {
    id: "hero-2",
    text: 	"Transforming Kindness into Hope, Food, and Education."
  },
  { id: "hero-3", text: 	"Help Us Give the Gift of a Brighter Future Today." },
];

export default function HeroCarousel() {
  return (
    <section className="relative group">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        className="w-full"
      >
        {heroImageIds.map((imageData) => {
          const image = findImage(imageData.id);
          return (
            <SwiperSlide key={image.id}>
              <div className="relative w-full w-screen h-full aspect-[5/5] md:aspect-[2/1]">
                <img
                  src={image.imageUrl}
                  alt={image.description}
                  className="object-cover w-full h-full absolute inset-0"
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 justify-center p-8 items-center bg-black/40 flex flex-col">
                  <h2 className="text-2xl md:text-7xl font-headline font-bold text-white text-center drop-shadow-lg max-w-4xl">
                    {imageData.text}
                  </h2>
                  <div className="mt-12 sm">
                    <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform h-10 sm:h-16">
                      <Link to="/tree">
                        <span className="text-s sm:text-xl">Give Today</span>
                        <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="swiper-pagination"></div>
      </Swiper>
      <div className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100 sm:left-8">
        <ChevronLeft className="h-6 w-6" />
      </div>
      <div className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100 sm:right-8">
        <ChevronRight className="h-6 w-6" />
      </div>
    </section>
  );
}
