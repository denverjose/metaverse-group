import { stats } from "@/lib/constants/stats-constants";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

import Counter from "./counter";

const Stats = () => (
  <div className="p-4 py-0">
    <MotionWrapper className="flex flex-col gap-6 w-full my-20 items-center justify-center container mx-auto bg-background-card py-10 rounded-[36px]">
      <h3 className="text-center text-3xl xs:text-4xl font-bold pb-1 md:text-5xl">
        Trusted By Different Businesses!
      </h3>
      <div className="flex flex-col lg:flex-row gap-4 w-full justify-around px-2">
        {stats.map((stat, index) => (
          <div key={index} className="px-8 py-1 rounded-lg ">
            <MotionWrapper className="flex flex-col items-center">
              <span className="font-bold text-5xl text-stats">
                <Counter
                  value={stat.value}
                  decimal={stat.decimal}
                  direction="up"
                />
                {stat.symbol}
              </span>
              <span className="text-primary font-semibold">{stat.title}</span>
            </MotionWrapper>
          </div>
        ))}
      </div>
    </MotionWrapper>
  </div>
);

export default Stats;
