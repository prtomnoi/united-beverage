"use client";

import { Checkbox } from "@/components/ui/checkbox";

const ContactForm = () => {
  return (
    <form className="flex flex-wrap gap-x-8 gap-y-4 p-4 pb-8 bg-primary rounded-2xl">
      <input
        type="text"
        title="name"
        placeholder="Name"
        className="px-4 py-2 text-[18px] border border-primary flex-auto basis-[500px]"
      />
      <input
        type="tel"
        title="phone"
        placeholder="Phone"
        className="px-4 py-2 text-[18px] border border-primary flex-auto basis-[500px]"
      />
      <input
        type="email"
        title="email"
        placeholder="Email"
        className="px-4 py-2 text-[18px] border border-primary flex-auto basis-[500px]"
      />
      <input
        type="text"
        title="subject"
        placeholder="Subject"
        className="px-4 py-2 text-[18px] border border-primary flex-auto basis-[500px]"
      />
      <textarea
        name="message"
        title="message"
        rows={5}
        placeholder="Message..."
        className="px-4 py-2 text-[18px] border border-primary w-full"
      />
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-white">
          <Checkbox id="Newsletter" />
          <label
            htmlFor="Newsletter"
            className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
          >
            I would like to sign up for Newsletter to receive the latest offers
            and promotions.
          </label>
        </div>
        <div className="flex items-center space-x-2 text-white">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
          >
            by submitting form, you must have read and agree to our Privacy
            Policy
          </label>
        </div>
      </div>
      <div className="w-full pt-4">
        <button
          type="submit"
          title="submit"
          className="px-6 py-2 bg-secondary text-white font-bold text-[20px] hover:bg-white hover:text-secondary transition-all"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
