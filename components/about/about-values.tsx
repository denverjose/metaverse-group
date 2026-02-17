import Image from "next/image";

import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

type Value = {
  img_url: string; // URL of the icon image
  title: string; // Title of the value
  description: string; // Description of the value
};

interface TeamValuesProps {
  values1: Value[];
  values2: Value[];
}

const AboutValues = ({ values1, values2 }: TeamValuesProps) => (
  <div className="container mx-auto lg:px-10 py-20">
    <div className="flex justify-center items-center mb-10 p-3 pt-0">
      <MotionWrapper className="text-center max-w-[514px]">
        <p className="about-heading">Our Values</p>
        <p className="about-subheading text-subheading">
          We pride ourselves on being a mission-driven business. Here are the
          principles that guide our work.
        </p>
      </MotionWrapper>
    </div>
    <div className="flex flex-col lg:flex-row gap-7 justify-center items-center">
      <MotionWrapper className="flex flex-col py-10 px-8 lg:px-11 lg:py-14 flex-1 gap-y-10 bg-background-card rounded-lg max-w-[574px] h-full ">
        {values1.map((value, index) => (
          <div className="flex" key={index}>
            <Image
              src={value.img_url}
              alt={value.title}
              width={36}
              height={36}
              className="w-16 h-16 mt-2 mr-2"
            />
            <div>
              <p className="text-[22px] lg:text-xl font-bold">{value.title}</p>
              <p className="about-subheading text-subheading">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </MotionWrapper>

      <MotionWrapper className="flex flex-col py-10 px-8 lg:px-11 lg:py-14 flex-1 gap-y-10 bg-background-card rounded-lg max-w-[574px] h-full lg:min-h-[1208px] xl:min-h-0">
        {values2.map((value, index) => (
          <div className="flex" key={index}>
            <Image
              src={value.img_url}
              alt={value.title}
              width={36}
              height={36}
              className="w-16 h-16 mt-2 mr-2"
            />
            <div>
              <p className="text-[22px] lg:text-xl font-bold">{value.title}</p>
              <p className="text-lg text-subheading">{value.description}</p>
            </div>
          </div>
        ))}
      </MotionWrapper>
    </div>
  </div>
);

export default AboutValues;
