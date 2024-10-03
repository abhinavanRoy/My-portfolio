/** icons */
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

/** components */
import ContactForm from "../components/ContactForm";
export default function ContactMe() {
    return (
        <>
            <div className="overflow-auto h-[75%]  flex flex-col items-center  w-full gap-6 px-10">
                <div className="flex flex-col gap-2 items-center  ">
                    <h1 className="text-white text-2xl font-poppins font-medium sm:text-3xl ">I would love to hear from you! 😄 </h1>
                    <h1 className="text-white font-poppins font-light opacity-80 text-xl " >Leave a message below, and I'll get back to you as soon as possible</h1>
                    <ContactForm />
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-white font-poppins font-medium text-lg sm:text-2xl">Connect with me</h1>
                    <div className="flex gap-3 justify-center">
                        {/* <a href="mailto:abhinavan2772@gmail.com"> <MdOutlineEmail className="cursor-pointer" color="white" size={30} /></a> */}
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/abhinavan-roy/"><FaLinkedin className="cursor-pointer" color="white" size={30} /></a>
                        <a rel="noopener noreferrer" target="_blank" href="https://x.com/AbhinavanR"> <FaXTwitter className="cursor-pointer" color="white" size={30} /></a>
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/abhinavanRoy"> <FaGithub className="cursor-pointer" color="white" size={30} /></a>
                    </div>

                </div>
            </div>
        </>
    );
}