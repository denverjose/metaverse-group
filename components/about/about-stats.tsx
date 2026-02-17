import React from "react";

import {
  yearsInBusiness,
  socialMediaStats,
  clientsServed,
  fundingRate,
  businessPartners,
} from "@/lib/constants/about-stats";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

const AboutStats = () => (
  <MotionWrapper className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 max-w-7xl w-full mx-auto h-auto px-4">
    {/* left */}
    <div className="flex sm:flex-col gap-4 sm:gap-5 md:gap-6">
      <div className="about-stats-card  bg-background-card flex-1">
        <p className="pb-2 about-stats-numbers ">{yearsInBusiness.value}+</p>
        <p className="about-stats-subtitle text-subheading">
          {yearsInBusiness.title}
        </p>
      </div>
      <div className="about-stats-card  bg-background-card flex-1">
        <p className="pb-2 about-stats-numbers ">{socialMediaStats.value}+</p>
        <p className="about-stats-subtitle text-subheading">
          {socialMediaStats.title}
        </p>
      </div>
    </div>
    {/* mid */}
    <div className="about-stats-card  bg-blue-500 flex-1 md:max-w-[410px]">
      <p className="pb-2 about-stats-numbers ">{clientsServed.value}+</p>
      <p className="about-stats-subtitle text-subheading">
        {clientsServed.title}
      </p>
    </div>
    {/* right */}
    <div className="flex sm:flex-col gap-4 sm:gap-5 md:gap-6 w-auto flex-1">
      <div className="about-stats-card  bg-background-card flex-1">
        <p className="pb-2 about-stats-numbers ">{businessPartners.value}+</p>
        <p className="about-stats-subtitle text-subheading">
          {businessPartners.title}
        </p>
      </div>
      <div className="about-stats-card  bg-background-card flex-1">
        <p className="pb-2 about-stats-numbers ">{fundingRate.value}%</p>
        <p className="about-stats-subtitle text-subheading">
          {fundingRate.title}
        </p>
      </div>
    </div>
  </MotionWrapper>
);

export default AboutStats;
