import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

import SMSForm from "../sms-form/sms-form";

const Header = () => (
  <div className="relative mb-20">
    <MotionWrapper className="flex justify-center items-center mt-32 lg:mt-48 container mx-auto">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="hidden">
            {process.env.NEXT_PUBLIC_BUSINESS_NAME} - Including Tax Software,
            Training, Mentorship, Tech Support, and More
          </h1>
          <h2 className="text-[40px] xs:text-5xl md:text-6xl font-bold text-wrap text-center px-6 py-3">
            {process.env.NEXT_PUBLIC_BUSINESS_NAME}
          </h2>
          <p className="text-subheading px-8 max-w-[700px] lg:p-0 text-center text-base md:text-lg">
            Software is <b>NOT</b> the business, People are <b>OUR</b> business.
          </p>
        </div>
        <SMSForm />
      </div>
    </MotionWrapper>
  </div>
);

export default Header;
