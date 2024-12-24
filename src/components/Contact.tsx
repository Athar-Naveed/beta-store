import { ArrowRight } from "lucide-react";
const Contact = () => {
    return (
        <>
        <div className="contact-footer flex-none lg:flex bg-transparent bg-gradient-to-b from-secondary to-[#FFFFFF]">
        <div className="img hidden lg:flex lg:ml-10 xl:ml-40">
        <img 
        className="absolute -bottom-[74rem] xl:-bottom-[70rem]"
        src="/assets/images/contact.webp"
        width={150}
        height={100}
        alt={"Contact Us"}
        />
        </div>
        <div className="contact text-center flex-none lg:flex lg:justify-center mx-5 p-5 text-white font-extrabold">
            <div className="contact-info lg:ml-60">
            <h1 className="text-lg">Can't find what you're looking for? Call us now on </h1>
            <span className="text-3xl text-yellow-600">0141 950 4018</span>
            <span className="text-lg"> or</span>
            </div>
            <div className="btn xl:ml-20">
            <button className="flex bg-white lg:ml-5 text-black mx-auto p-4 rounded-lg mt-2">Contact Us <ArrowRight className="ml-2 mt-1" size={16} /></button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Contact;