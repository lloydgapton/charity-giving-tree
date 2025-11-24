import { charities, findImage, type Charity } from '../../lib/data';
import WishCard from '../../components/wish-card';
import { Link as LinkIcon, Leaf } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { useParams, Navigate } from 'react-router-dom';

export default function CharityPage() {
  const { slug } = useParams<{ slug: string }>();
  const charity = charities.find((c) => c.slug === slug);
  if (!charity) return <Navigate to="/" replace />;
  const bannerImage = findImage(charity.bannerId);
  return (
    <div className="bg-background pt-24">
      <header className="relative h-64 md:h-80 w-full overflow-hidden p-0 m-0">
        <img
          src={bannerImage.imageUrl}
          alt={bannerImage.description}
          className="absolute inset-0 w-full h-full object-cover"
          data-ai-hint={bannerImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white text-center drop-shadow-lg">
            {charity.name}
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-1">
            <div className="group relative p-6 rounded-lg bg-card border shadow-sm sticky top-24 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <Leaf className="absolute top-3 right-3 h-5 w-5 text-primary/80 animate-sway group-hover:animate-none" />
                <h2 className="font-headline text-2xl font-bold text-primary mb-4">About Us</h2>
                <p className="text-foreground/80 mb-4">{charity.description}</p>
                <Button variant="outline" asChild>
                    <a href={charity.website} target="_blank" rel="noopener noreferrer">
                        Visit Website <LinkIcon className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-headline text-3xl font-bold text-primary mb-6">Our Wish List</h2>
            <div className="space-y-6">
              {charity.wishes.length > 0 ? (
                charity.wishes.map((wish) => (
                  <WishCard key={wish.id} wish={wish} charity={charity} />
                ))
              ) : (
                <p className="text-muted-foreground">This charity has no active wishes right now. Check back soon!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}