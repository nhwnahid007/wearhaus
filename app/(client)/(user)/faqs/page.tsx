import Container from "../../../../components/Container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { faqsData } from "../../../../constants";


const FAQPage = () => {
  return (
    <div className="bg-white py-12 text-gray-800"> {/* Added background and text color for consistency */}
      <Container className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Container ensures consistent padding */}
        <h1 className="text-4xl font-bold mb-8 text-center text-darkColor"> {/* Larger heading, centered */}
          Frequently Asked Questions
        </h1>
        <p className="mb-10 text-lg text-center text-gray-600 max-w-2xl mx-auto">
          Have questions about your order, our products, or anything else? Wev&apos;e compiled a list of common inquiries to help you out.
        </p>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4" // Added space-y-4 for gap between items
          defaultValue="item-0" // Keeps the first item open by default
        >
          {faqsData.map((faq, index) => (
            <AccordionItem
              value={`item-${index}`}
              key={`faq-${index}`} // More descriptive key for clarity
              className="border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-gray-50 group data-[state=open]:bg-white transition-all duration-200" // Enhanced styling for items
            >
              <AccordionTrigger className="text-left text-xl font-semibold text-gray-800 group-hover:text-darkColor/90 transition-colors px-6 py-4 hover:no-underline"> {/* Adjusted font size and padding */}
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 px-6 pb-5 pt-0 leading-relaxed"> {/* Adjusted padding and line height */}
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQPage;