import Faq from "@/components/Faq";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="py-10">
        <Link href="/contact" className="p-1 bg-gray-700 text-white rounded-md">
          Contact
        </Link>
        <Faq />
      </section>
    </>
  );
};

export default page;
