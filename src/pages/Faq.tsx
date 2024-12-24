import Navbar from "../components/Navbar";
import BreadCrumbs from "../components/Breadcrumbs";
import Accordions from "../components/Accordion";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const FAQ = () => {
    
    return (
        <>
        <Navbar />
        <div className="faq-img bg-[url('/assets/faq/faq.webp')] bg-cover bg-center h-[170px] md:h-[400px] lg:h-[370px] grid justify-center items-center">
        <h1 className="text-2xl md:text-5xl text-white font-bold mt-10 lg:mt-20 font-sans">How can we help you?</h1>
        <span className="text-white text-center font-semibold mx-4 -mt-20 md:-mt-52 lg:-mt-52">Frequently Asked Questions</span>
        </div>
<BreadCrumbs />
<Accordions />
<Contact />
<Footer />
        </>
    )
}

export default FAQ;