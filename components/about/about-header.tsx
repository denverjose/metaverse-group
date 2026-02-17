import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

const AboutHeader = () => (
  <MotionWrapper className="px-4 lg:pl-10 max-w-[1316px] mx-auto">
    <h1 className="about-heading leading-tight max-w-[878px] font-bold pb-2">
      Our mission is to empower marginalized communities through engineering.
    </h1>
    <p className="about-subheading max-w-[710px] text-subheading">
      We believe software engineering is the key to upward mobility, we teach,
      mentor, give practical experience, place talent, and build applications
      for enterprise grade companies.
    </p>
  </MotionWrapper>
);

export default AboutHeader;
