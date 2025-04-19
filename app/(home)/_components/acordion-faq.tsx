import { LineSeparatorX } from "@/app/_components/line-separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { useDataAcordionFaq } from "@/app/_hooks/use-data-acordion-faq";

const AcordionFaq = () => {
  const { dataAcordionFaq } = useDataAcordionFaq();
  return (
    <div className="mx-auto w-full max-w-[520px] space-y-6 py-12">
      {dataAcordionFaq.map((items) => (
        <Accordion key={items.id} type="single" collapsible className="w-full">
          <div className="rounded-2xl border-[1px] border-gray-400/5 bg-[#080808] px-2">
            <AccordionItem value={items.id}>
              <AccordionTrigger className="text-white-color text-base">
                {items.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-color">
                <LineSeparatorX className="mb-2 min-h-[20px] bg-gradient-to-r from-[rgba(143,143,143,0.3)] to-[rgba(0,0,0,0)]" />
                {items.response.split("\n").map((line, index) => (
                  <p key={index} className="mb-2">
                    {line}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
      ))}
    </div>
  );
};

export default AcordionFaq;
