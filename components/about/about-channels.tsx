import Image from "next/image";
import Link from "next/link";

import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

const AboutChannels = () => (
  <div className="max-w-7xl container mx-auto flex justify-center flex-col items-center px-4 mt-10">
    <MotionWrapper className="max-w-4xl text-center mb-14">
      <h2 className="about-heading">❤️We Are More Than Software❤️</h2>
    </MotionWrapper>
    <div className="flex flex-col md:flex-row gap-x-28 gap-y-6 items-center mb-32 ">
      <MotionWrapper className="flex-1 text-center md:text-left">
        <h2 className="about-heading pb-4">18/7 Support</h2>
        <p className="text-subheading about-subheading">
          Our team is ready available to assist you with expert guidance,
          resources, and troubleshooting, ensuring smooth and hassle-free tax
          preparation.
          {/* We are constantly providing feedback, resources and support through
          our countless topics! */}
        </p>
        <button className="bg-background-employee-button text-employee-button-text hover:text-employee-button-text-hover hover:bg-background-employee-button-hover hover:scale-105 duration-200 font-bold about-subheading py-4 px-8 md:py-6 md:px-9 rounded-full mt-14 mx-auto ">
          <Link href="/services/tax-software">Join our Team</Link>
        </button>
      </MotionWrapper>
      <MotionWrapper className="flex-1">
        <Image
          alt="developer"
          width={500}
          height={500}
          src="/images/dev1.webp"
          className="w-full h-auto rounded-3xl"
        />
      </MotionWrapper>
    </div>
    <div className="flex flex-col-reverse md:flex-row gap-x-28 gap-y-6 items-center mb-32">
      <MotionWrapper className="flex-1">
        <Image
          alt="developer"
          width={500}
          height={500}
          src="/images/regular-calls.webp"
          className="w-full h-auto rounded-3xl"
        />
      </MotionWrapper>
      <MotionWrapper className="flex-1 text-center md:text-left">
        <h2 className="about-heading pb-4">Training & Mentorship</h2>
        <p className="text-subheading about-subheading">
          {/* We provide individual / group training and mentorship, on a variety of
          topics including; and as needed on industry trends, regulation,
          techology, and entrepreneurship. */}
          We teach you through our Mentorship Program, coupled with our Training
          Academy and Live Seminars on Zoom, how to market your business and
          hire the right people. You can attend one of the live seminars, or
          schedule individual sessions if you have the advanced package (eg.
          subjects: email, social media (fb, instagram), job-websites, etc).
        </p>

        <button className="bg-background-employee-button text-employee-button-text hover:text-employee-button-text-hover hover:bg-background-employee-button-hover hover:scale-105 duration-200 font-bold about-subheading py-4 px-8 md:py-6 md:px-9 rounded-full mt-14 mx-auto ">
          <Link href="/services/tax-software">Join our Team</Link>
        </button>
      </MotionWrapper>
    </div>
  </div>
);

export default AboutChannels;
