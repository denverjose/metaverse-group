import { values1, values2 } from "@/lib/constants/about-values";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

import { team } from "../../lib/constants/about-team";
import BookACallButton from "../book-a-call/book-a-call";

import AboutCarousel from "./about-carousel";
import AboutHeader from "./about-header";
import AboutStats from "./about-stats";
import AboutTeam from "./about-team";
import AboutValues from "./about-values";

export default async function About() {
  return (
    <div className="pt-20 text-primary" id="about">
      {/* header */}
      <AboutHeader />
      {/* team carousel  */}
      <div className="pb-28 xs:pb-32 md:pb-40 lg:pb-48 2xl:pb-24 pt-28">
        <AboutCarousel isReverse={false} />
        <AboutCarousel isReverse={true} />
      </div>
      {/* team stats */}
      <AboutStats />
      {/* team member card */}
      <div className="pt-20 flex flex-col items-center">
        <MotionWrapper className="max-w-[1316px] mx-auto mb-10 text-center">
          <h2 className="about-heading pb-3 ">The Team</h2>
          <p className="text-subheading about-subheading">
            Meet the team dedicated to working with integrity and passion.
          </p>
        </MotionWrapper>
        <MotionWrapper className="grid md:grid-cols-2 gap-7 mx-auto px-4 md:px-6 text-primary max-w-[1316px] pb-20">
          {team.map((member, index) => (
            <AboutTeam
              key={index}
              member={member}
              // first_name={member.first_name}
              // last_name={member.last_name}
              // position={member.position}
              // img_url={member.img_url}
              // phone_number={member.phone_number}
              // email={member.email}
              // bio={member.bio}
              // calendar_link={member.calendar_link}
            />
          ))}
        </MotionWrapper>
        <BookACallButton />
      </div>
      {/* team values */}
      <AboutValues values1={values1} values2={values2} />
      {/* team channels
      <AboutChannels /> */}
    </div>
  );
}
