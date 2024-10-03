/** components */
import Button from "../components/Button";
/** hooks */
import { useContactForm } from "../lib/hooks/useContactForm";
import { useEffect, useState } from "react";
/** utils */
import CONSTANTS from "../lib/constants/Constants"



export default function ContactForm() {
  const { submitForm, isFormSubmitted,isFormSubmitting } = useContactForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isFormSubmitted) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [isFormSubmitted]);

  return (
    <>

      <form onSubmit={(e) => {
        e.preventDefault();
        submitForm({
          name,
          email,
          message
        });
      }}
        className="flex flex-col py-4 items-center gap-4 "

      >
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" font-poppins outline-none rounded-md p-2 w-80 font-medium text-lg "
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className=" font-poppins outline-none rounded-md p-2  w-80 font-medium text-lg "
          type="email"
          placeholder="Email"
        />
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=" min-w-64 font-poppins outline-none  w-80 rounded-md p-2 font-medium text-lg "
          type="text"
          placeholder="Message"
        />
        <Button
          type="submit"
          isDisabled={isFormSubmitting}
          className={"text-xl py-3 sm:py-2 sm:text-xl w-32 just"}
          btnName={CONSTANTS.send}
        />
      </form>


    </>
  );
}
