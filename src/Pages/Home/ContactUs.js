import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7a40omo",
        "template_xi0y3j1",
        form.current,
        "4Y6XNiYYL9smGAbjj"
      )
      .then(
        (result) => {
          toast.success("Email has been sent successfully", {
            theme: "colored",
          });
        },
        (error) => {
          toast.error(error.text, { theme: "colored" });
        }
      );
    e.target.reset();
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="mt-16 flex flex-col items-center"
    >
      <div className="card w-full max-w-3xl sm:pt-5 lg:pt-0">
        <form className="card-body" ref={form} onSubmit={sendEmail}>
          <h4 className="text-4xl font-bold pb-2">Contact Us</h4>
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="form-control lg:w-1/2">
              <input
                className="input input-bordered glass bg-secondary hover:bg-secondary text-white placeholder:text-white"
                type="text"
                placeholder="Name"
                name="userName"
              />
            </div>
            <div className="form-control lg:w-1/2">
              <input
                className="input input-bordered glass bg-secondary hover:bg-secondary text-white placeholder:text-white"
                type="text"
                placeholder="Email Address"
                name="userEmail"
              />
            </div>
          </div>
          <div className="form-control">
            <input
              className="input input-bordered glass bg-secondary hover:bg-secondary text-white placeholder:text-white"
              type="text"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="form-control">
            <textarea
              className="input input-bordered glass bg-secondary hover:bg-secondary text-white placeholder:text-white h-20  pt-2"
              type="text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <div className="form-control mt-2 w-full">
            <button
              className="btn btn-primary font-bold border-[1px] border-secondary"
              type="submit"
              value="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
