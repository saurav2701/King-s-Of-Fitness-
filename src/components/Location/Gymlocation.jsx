import React from "react";
import locationclasses from "./Gymlocation.module.css";
import { IoLocationOutline } from "react-icons/io5";

const Gymlocation = () => {
  return (
    <section id="location" className={locationclasses.locationSection}>
      <h2 className={locationclasses.title}>
        <IoLocationOutline /> Find Us
      </h2>
      <div className={locationclasses.mapWrapper}>
        <iframe
          title="Gym Location"
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4310096250856!2d83.46117417578067!3d27.703975676184577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687005085dd25%3A0x60f914da5f6c6834!2sKing%E2%80%99s%20Of%20Fitness!5e0!3m2!1sen!2snp!4v1746018216729!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Gymlocation;
