import { Accordion,AccordionItem,AccordionTrigger,AccordionContent } from "./ui/accordion"
export default function faq() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card rounded-lg px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              What is The Digital Giving Tree?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              The Digital Giving Tree is a transparent donation platform that connects B2B donors
              and individuals with verified grassroots charities across Nigeria. Each "branch" on
              our tree represents a charity with specific needs. By clicking on a branch, you can
              see their mission, current wishes, and donate directly to fulfill those needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card rounded-lg px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              How does the donation process work?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Simply click on any charity branch on the tree, browse their active wishes, select
              the item you'd like to donate, choose the quantity, and proceed with payment. You'll
              receive an email receipt and can track the impact of your donation. You can also
              share your contribution on social media to inspire others.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card rounded-lg px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              How are charities verified and selected?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              All charities on our platform undergo a rigorous verification process. We review
              their registration documents, visit their operations, verify their impact stories,
              and conduct background checks. Only grassroots organizations with proven track
              records and transparent operations are listed on The Digital Giving Tree.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-card rounded-lg px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              How can my charity join The Digital Giving Tree?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Registered charities can apply through our online application form. You'll need to
              provide registration documents, proof of operations, references, and details about
              your mission and current needs. Once approved, you can list up to 5 active wishes at
              a time and update them as they're fulfilled.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-card rounded-lg px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              Is my donation secure and tax-deductible?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes! We use secure payment processing to protect your financial information. All
              transactions are encrypted and your data is never shared with third parties. Receipts
              are emailed immediately after donation. Tax deductibility depends on the charity's
              registration status - please check with individual charities for their tax-exempt
              status.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-card rounded-lg px-6">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline">
              Can I track how my donation is used?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolutely! Once a wish is fully funded, charities are required to provide updates
              and photos showing how the donated items are being used. You'll receive email
              notifications with these impact reports, and you can always check back on the
              charity's page to see current progress and new wishes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
  )
}