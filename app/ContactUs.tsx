import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <>
      <div className="default-container space-y-4 !mt-20 ">
        <h1 className="text-center font-bold text-[25px] md:text-[30px] lg:text-[35px] text-primary">
          Contact Us
        </h1>
        <ContactForm />
      </div>
      <div className="pt-20 default-container flex flex-wrap gap-6">
        <div className="space-y-3 basis-[500px] flex-auto">
          <h1 className="text-[25px] md:text-[28px] text-primary font-bold">
            Location
          </h1>
          <div className="bg-white shadow-md rounded-lg border-2 border-primary">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3787.6620210759834!2d99.3986862!3d18.3170581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d96f264a1dd1f9%3A0xf0346c6d9b33150!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LiY4Lij4Lij4Lih4Lio4Liy4Liq4LiV4Lij4LmMIOC4qOC4ueC4meC4ouC5jOC4peC4s-C4m-C4suC4hw!5e0!3m2!1sth!2sth!4v1722684906398!5m2!1sth!2sth"
              width="100%"
              height="300px"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-3 basis-[500px] flex-auto">
          <h1 className="text-[25px] md:text-[28px] text-primary font-bold">
            Contact Information
          </h1>
          <div className="bg-white shadow-md rounded-lg p-4 py-6 space-y-4 font-bold text-[18px] border-2 border-primary flex-auto">
            <p>
              Email:{" "}
              <span className="text-primary">Info@unitedbeverage.co.th</span>
            </p>
            <p>
              Tel: <span className="text-primary">02 255 7942</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
