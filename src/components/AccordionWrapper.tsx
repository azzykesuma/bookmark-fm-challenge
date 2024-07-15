import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
const accordionItems = [
  {
    value: "item-1",
    trigger: "What is Bookmark?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    value: "item-2",
    trigger: "How can I request a new browser?",
    content:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    value: "item-3",
    trigger: "Is there a mobile app?",
    content:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    value: "item-4",
    trigger: "What about other Chromium browsers?",
    content:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const AccordionWrapper = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {accordionItems.map((item) => (
        <AccordionItem className="accordionTrigger" key={item.value} value={item.value}>
          <AccordionTrigger className="text-left text-sm mb-2 font-light text-very-dark-blue">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="text-grayish-blue leading-8">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionWrapper;
