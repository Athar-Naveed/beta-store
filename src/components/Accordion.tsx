import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { faqs } from "./constant";
const Accordions = () => {
    return (
        <>
         <div className="grid mt-10 mb-40 mx-2 lg:mx-10">
         <Accordion
         allowZeroExpanded
         className='border-none'
         >
            {faqs.map((faq,index) => (
                <div className="single-accordion font-bold" key={index}>
                <div className="heading">
                    <h1 className='h1 text-xl'>{faq.title}</h1>
                </div>
                {faq.listOfQuestions.map((qa,index) => (
                    <AccordionItem key={index} className='my-5 font-serif'>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {qa.question}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        {qa.answer}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            ))}
                </div>
            ))}
        </Accordion>

         </div>
        </>
    )
}

export default Accordions;