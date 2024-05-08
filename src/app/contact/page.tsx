import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch | KAS ",
  description: "Contact With KAS Team",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
    
      <Breadcrumb
        pageName="Contact Us"
        description="Connect with us effortlessly via our contact page. Share inquiries, feedback, or collaboration ideas."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
