import React, { useRef, useState } from "react";
import TitleBox from "../components/TitleBox.jsx";
import Contact3DModel from "../components/3dModel/Contact-section/Contact3DModel.jsx";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );
      setForm({
        name: "",
        email: "",
        message: "",
      });
      alert("Message Sent Successfully");
    } catch (err) {
      console.log("EmailJs Error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-[90%] mx-auto mt-20" id="contact">
      <TitleBox
        sub="💬 Have questions or ideas? Let’s talk! 🚀"
        title="Get in Touch – Let’s Connect"
      />
      <div className="my-10 grid grid-cols-1 xl:grid-cols-12 gap-5">
        <div className="bg-[#0E0E10] xl:col-span-5 rounded-3xl">
          <form
            ref={formRef}
            onSubmit={submitHandler}
            className="flex flex-col gap-5 p-10"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[#D9ECFF]">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="What's your name?"
                className="h-10 w-full bg-[#2D2D38] p-5 placeholder-[#839CB5] rounded-xl "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#D9ECFF]">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="eamil"
                placeholder="What's your email address?"
                className="h-10 w-full bg-[#2D2D38] p-5 placeholder-[#839CB5] rounded-xl "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[#D9ECFF]">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="How can I help you?"
                className="h-40 w-full bg-[#2D2D38] p-5 placeholder-[#839CB5] rounded-xl "
              />
            </div>
            <button
              type="submit"
              className="flex gap-5 items-center justify-center border h-10 w-full mx-auto rounded-xl bg-[#EBF3FA] text-black font-semibold"
            >
              {loading ? (
                <p>Loading...</p>
              ) : (
                <div className="flex gap-5 items-center justify-center">
                  <p>Send Message</p>
                  <img src="/pictures/arrow-right.svg" alt="arrow" />
                </div>
              )}
            </button>
          </form>
        </div>
        <div className="xl:col-span-7 min-h-96">
          <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
            <Contact3DModel />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
