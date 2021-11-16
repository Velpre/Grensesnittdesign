import React,  {useRef, useEffect} from "react";
import { Email, Facebook, Instagram } from "@mui/icons-material";
import { display } from "@mui/system";

const ContactUs = (props) => {

   
  return (
    <div className="contact-section" id='kontakt-oss'>
      <h1>Kontakt oss</h1>

      <div className="contact-content">
        <div>
          <Email></Email>
          <h3>E-mail</h3>
          <p>post@bellapizza</p>
          <h3>Telefon</h3>
          <p>21 21 21 00</p>
          <h3>Adresse</h3>
          <p>Romaveien 12</p>
          <p>0368 Oslo</p>
        </div>

        <div>
          <h3>Åpningstider</h3>
          <div>
            <p>Mandag-Torsdag</p>
            <p>11:00 - 00:00</p>
          </div>
          <div>
            <p>Lørdag-Søndag</p>
            <p>16:00 - 00:00</p>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.2485322165871!2d10.71228261623299!3d59.928018081872324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dda8d0e2f57%3A0xe341c8f7f266f75e!2sKirkeveien%2057%2C%200368%20Oslo!5e0!3m2!1sno!2sno!4v1615913272217!5m2!1sno!2sno"
            style={{ border: 0, borderRadius: 10 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
