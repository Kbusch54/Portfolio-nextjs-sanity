import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:kevinbusch@comcast.net?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    console.log(formData);
  };
  return (
    <div className="h-screen flex relative flex-col text-cetner md:text-left md:flex-row max-w-7xl px-10 pl-[1.2rem] md:pr-0 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 pt-36 md:pt-0 md:max-w-xl">
        <h4 className="text-4xl space-y-4 font-semibold text-center tracking-[8px]">
          {" "}
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk</span>
        </h4>
        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p>(734) 274-0259</p>
        </div>
        <button className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <div>Send Email</div>
        </button>
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p>USA Eastern Timezone</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex space-x-2">
          <input
            {...register("name")}
            placeholder="Name"
            className="contact-input"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contact-input"
            type="text"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contact-input"
          type="text"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contact-input"
        ></textarea>
        <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
