import React from "react";
import ContactForm from "../components/ContactForm";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function ContactPage() {
  return (
    <div>

      {/* Contact Form */}
      <ContactForm />

      {/* SOCIAL ICONS UNDER SEND MESSAGE */}
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          gap: 14,
        }}
      >
        {/* GitHub */}
        <a
          href="https://github.com/Saanket-Das"
          className="social"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 22 }}
        >
          <FiGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sanket-kumar-das-598298229/"
          className="social"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 22 }}
        >
          <FiLinkedin />
        </a>

        {/* Gmail Compose */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sanketlives@gmail.com"
          className="social"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 22 }}
        >
          <FiMail />
        </a>
      </div>

    </div>
  );
}
