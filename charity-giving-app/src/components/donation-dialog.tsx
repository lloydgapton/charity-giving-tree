import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import type { Wish, Charity } from '../lib/data';
import { Button } from '../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { useToast } from '../hooks/use-toast';
import { Plus, Minus } from 'lucide-react';
import TransactionSuccess from './transaction-success';
import { cn} from '../lib/utils';

const donationSchema = z.object({
  quantity: z.number().min(1, 'Must donate at least 1 item.'),
  email: z.string().email('Please enter a valid email address.'),
  name: z.string().optional(),
  note: z.string().optional(),
});

type DonationFormValues = z.infer<typeof donationSchema>;

type DonationDialogProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  wish: Wish;
  charity: Charity;
};

export default function DonationDialog({ isOpen, setIsOpen, wish, charity }: DonationDialogProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [donationAmount, setDonationAmount] = useState(0);

  const { toast } = useToast();

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      quantity: 1,
      email: '',
      name: '',
      note: '',
    },
  });

  const quantity = form.watch('quantity');
  const total = quantity * wish.unitPrice;

  async function onSubmit(data: DonationFormValues) {
    const totalDonation = data.quantity * wish.unitPrice;
    setDonationAmount(totalDonation);

    // // --- Start of Make.com Integration ---
    // const webhookUrl = process.env.NEXT_PUBLIC_MAKE_COM_WEBHOOK_URL;

    // if (webhookUrl && webhookUrl.includes('your-unique-webhook-id')) {
    //     console.warn('Make.com webhook URL is a placeholder. Please update it in .env.local.');
    // }
    
    // if (webhookUrl && !webhookUrl.includes('your-unique-webhook-id')) {
    //     try {
    //         await fetch(webhookUrl, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 toEmail: data.email,
    //                 donorName: data.name || 'A generous donor',
    //                 charityName: charity.name,
    //                 wishTitle: wish.title,
    //                 donationAmount: totalDonation,
    //             }),
    //         });
    //     } catch (error) {
    //         console.error('Failed to trigger Make.com webhook:', error);
    //         // We can decide if we want to show an error to the user or just log it.
    //         // For now, we'll let the donation proceed.
    //     }
    // }
    // --- End of Make.com Integration ---


    // In a real app, you would also save the donation to a database here.
    console.log('Donation processed:', data);
    
    setStep('success');
    toast({
      title: 'Donation Successful!',
      description: `Thank you for supporting ${charity.name}. A receipt will be sent to your email.`,
    });
  }
  
  const handleClose = () => {
    setIsOpen(false);
    // Reset form after a short delay to allow dialog to close
    setTimeout(() => {
        form.reset();
        setStep('form');
    }, 300);
  };

  const handleQuantityChange = (amount: number) => {
    const currentQuantity = form.getValues('quantity');
    const newQuantity = Math.max(1, currentQuantity + amount);
    form.setValue('quantity', newQuantity);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {step === 'form' ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl text-primary">Donate to: {wish.title}</DialogTitle>
              <DialogDescription>
                You're supporting '{charity.name}'. Thank you for your generosity.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-2">
                           <Button type="button" variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(-1)} disabled={field.value <= 1}>
                             <Minus className="h-4 w-4" />
                           </Button>
                           <Input {...field} type="number" className="w-16 text-center" />
                           <Button type="button" variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(1)}>
                             <Plus className="h-4 w-4" />
                           </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email (for receipt)</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Doe" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Note (Optional)</FormLabel>
                      <FormControl>
                        <textarea
                          placeholder="A message of support..."
                          className={cn(
                            'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                          )}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <DialogFooter className="sm:justify-between items-center pt-4">
                  <div className="text-2xl font-bold text-primary font-headline">
                    Total: ${total.toFixed(2)}
                  </div>
                  <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Complete Donation
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        ) : (
          <TransactionSuccess
            charityName={charity.name}
            wishTitle={wish.title}
            donationAmount={donationAmount}
            onClose={handleClose}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
