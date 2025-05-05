import React from "react";
import contactdetailclasses from "./ContactDetails.module.css";

const ContactDetails = () => {
  return (
    <div className={contactdetailclasses["contact-details__wrapper"]}>
      <ul className={contactdetailclasses["contact-details__lists"]}>
        <li>
          <h4>General Contact</h4>
          <address>
            <p>
              Butwal-03, Amarpath
              <br />
              <a href="tel:+9779851081523">+977 9851081523</a>
              <br />
              <a href="tel:+9779847008873">+977 9847008873</a>
            </p>
          </address>
        </li>
      </ul>
    </div>
  );
};

export default ContactDetails;
