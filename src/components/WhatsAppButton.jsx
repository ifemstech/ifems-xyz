import React from "react";

function WhatsAppButton() {
  const phoneNumber = "2349129596420"; // replace with your number

  const message = encodeURIComponent("Hey ifems xyz 👋, I need support with your services.");

  const link = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      💬
    </a>
  );
}

export default WhatsAppButton;