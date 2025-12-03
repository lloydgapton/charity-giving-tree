import givingTreeImage from '../assets/taller tree.jpg';
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
  { top: '-30%', left: '20%' },
  { top: '-15%', left: '-40px' },
  { top: '1%', left: '25%' },
  { top: '-15%', left: '25%' },
  { top: '5%', left: '-35%' },
];

export default function Tree({charities}: GivingTreeProps) {
  const [selectedCharity, setSelectedCharity] = useState<Charity | null>(null);

  const handleBranchClick = (charity: Charity) => {
    setSelectedCharity(charity);
  };

  return (<>
  <section className="relative w-full h-screen overflow-hidden">
      <Header variant="dark" />
      <div className="absolute inset-0 flex items-center justify-center">
          <img
          src= {givingTreeImage}
          alt="The Digital Giving Tree"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
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
      </div>
    </section>
  </>
  )
}