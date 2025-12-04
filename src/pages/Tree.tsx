import givingTreeImage from '../assets/image6.png';
import Footer from '../components/footer';
import Faq from '../components/faq';
import Header from '../components/header';
import type { Charity } from '../lib/data';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { findImage } from '../lib/data';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';

type GivingTreeProps = {
  charities: Charity[];
};

const branchPositions = [
  { top: '55%', left: '20%' },
  { top: '60%', left: '25%' },
  { top: '65%', left: '30%' },
  { top: '60%', left: '35%' },
  { top: '55%', left: '40%' },
];

export default function Tree({charities}: GivingTreeProps) {
  const [selectedCharity, setSelectedCharity] = useState<Charity | null>(null);

  const handleBranchClick = (charity: Charity) => {
    setSelectedCharity(charity);
  };

  return (
    <div className="w-full">
      <section className="relative group w-full overflow-visible">
    <Header variant="dark" />
    <div className="relative w-screen h-full aspect-[5/5] md:aspect-[2/1]">
          <img
          src= {givingTreeImage}
          alt="The Digital Giving Tree"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/5 to-background/" />
      <Dialog>
        {charities.map((charity, index) => {
            const position = branchPositions[index % branchPositions.length];
            return (
                <DialogTrigger
                    asChild
                    key={charity.id}
                    style={{ top: position.top, left: position.left }}
                    className="absolute w-10 h-10 md:w-16 md:h-16 -translate-x-1/2 -translate-y-1/2"
                    onClick={() => handleBranchClick(charity)}
                >
                    <button aria-label={`Learn more about ${charity.name}`} className=" relative focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-full transition-transform duration-300 transform hover:scale-110">
                        <img
                            src={findImage(charity.logoId).imageUrl}
                            alt={`${charity.name} logo`}
                            width={64}
                            height={64}
                            className="rounded-full border-4 border-background object-cover shadow-lg transition-transform duration-300 group-hover:scale-105 w-full h-full object-cover object-center"
                            data-ai-hint={findImage(charity.logoId).imageHint}
                        />
                    </button>
                </DialogTrigger>
            );
        })}
        {selectedCharity && (
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                    <img
                        src={findImage(selectedCharity.logoId).imageUrl}
                        alt={`${selectedCharity.name} logo`}
                        width={64}
                        height={64}
                        className="rounded-lg border-2 border-border"
                        data-ai-hint={findImage(selectedCharity.logoId).imageHint}
                    />
                    <DialogTitle className="text-2xl font-headline text-primary">{selectedCharity.name}</DialogTitle>
                </div>
                <DialogDescription className="text-base text-foreground/80 text-left">
                    {selectedCharity.missionStatement}
                </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                <p className="text-sm">{selectedCharity.description}</p>
                </div>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link to={`/charity/${selectedCharity.slug}`}>
                        Visit Charity Page <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </DialogContent>
        )}
      </Dialog>
      <div className="relative z-10 text-center px-4 pb-20 pt-10">
          <h1 className="text-2xl md:text-7xl font-bold text-background mb-4 drop-shadow-lg">
            The Digital Giving Tree
          </h1>
          <p className="text-s md:text-2xl text-background/90 max-w-xl mx-auto drop-shadow">
            Connect with local charities and make wishes come true
          </p>
        </div>
      </div>
    </section>
    <Faq />
    <Footer />
    </div>
  )
}