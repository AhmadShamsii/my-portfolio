"use client"
import Link from "next/link";
import { StyledTitle } from "../projects/styles";
import ContactForm from "@/components/Contact/Contact";

const Contact = () => {
  return (
    <div style={{ marginTop: "2.5%" }}>
      <StyledTitle>Contact</StyledTitle>
      <div style={{ marginTop: "50px" }}>
        <ContactForm isContactPage={true} />
      </div>
    </div>
  );
};

export default Contact;
