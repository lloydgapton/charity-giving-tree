import type { Wish, Charity } from '../lib/data';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
// import DonationDialog from './donation-dialog';
import { Badge } from './ui/badge';
import { Target, Leaf } from 'lucide-react';

type WishCardProps = {
  wish: Wish;
  charity: Charity;
};

export default function WishCard({ wish, charity }: WishCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const progress = (wish.quantityDonated / wish.quantityNeeded) * 100;
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <>
      <Card className="group relative flex flex-col h-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
        <Leaf className="absolute top-3 right-3 h-5 w-5 text-primary/80 animate-sway group-hover:animate-none" />
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="font-headline text-xl text-primary">{wish.title}</CardTitle>
            <Badge variant="secondary">{wish.category}</Badge>
          </div>
          <CardDescription>{wish.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1 text-sm text-muted-foreground">
              <span>Progress</span>
              <span>
                {wish.quantityDonated.toLocaleString()} / {wish.quantityNeeded.toLocaleString()}
              </span>
            </div>
            <Progress value={progress} aria-label={`${progress.toFixed(0)}% funded`} />
          </div>
          <div className="flex items-center text-muted-foreground">
            <Target className="h-5 w-5 mr-2 text-primary/80"/>
            <span>Goal: {formatCurrency(wish.quantityNeeded * wish.unitPrice)}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <p className="text-lg font-bold text-primary">{formatCurrency(wish.unitPrice)} <span className="text-sm font-normal text-muted-foreground">per item</span></p>
          <Button onClick={() => setIsDialogOpen(true)} className="bg-accent hover:bg-accent/90 text-accent-foreground">Donate</Button>
        </CardFooter>
      </Card>
      {/* <DonationDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        wish={wish}
        charity={charity}
      /> */}
    </>
  );
}
