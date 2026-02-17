"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import React, { useState } from "react";

const AboutTeam = ({
  member,
  // first_name,
  // last_name,
  // phone_number,
  // email,
  // position,
  // img_url,
  // bio,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Team Card */}
      <button
        className="w-full cursor-pointer bg-transparent border-none p-0 text-left"
        onClick={() => setIsOpen(true)}
        aria-label="Open team member details"
      >
        <div className="group relative bg-background-card pt-16 xs:pt-[76px] pb-10 lg:pb-12 px-6 md:px-8 rounded-3xl w-full hover:shadow-xl transition-shadow duration-300">
          <div className="absolute top-5 right-5 bg-gray-400 py-[10px] px-5 text-sm md:text-base w-max rounded-full">
            {member.position}
          </div>
          <div className="overflow-hidden h-max rounded-full w-max mx-auto">
            <Image
              src={member.img_url}
              className="rounded-full mx-auto group-hover:scale-105 duration-300"
              height={250}
              width={250}
              alt={`${member.first_name} ${member.last_name}`}
            />
          </div>
          <h3 className="text-3xl md:text-5xl mt-3 font-bold group-hover:text-red-600 duration-300">
            {member.first_name} {member.last_name}
          </h3>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 text-black">
          <div className="bg-white rounded-3xl p-6 md:p-10 w-[90%] max-w-lg relative shadow-lg overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <Image
                src={member.img_url}
                alt={`${member.first_name} ${member.last_name}`}
                height={200}
                width={200}
                className="rounded-full mx-auto mb-4"
              />
              <h2 className="text-3xl font-bold mb-1">
                {member.first_name} {member.last_name}
              </h2>
              <p className="text-gray-600 mb-3">{member.position}</p>

              {/* Bio */}
              {member.bio && (
                <div className=" text-left bg-gray-50 p-4 rounded-2xl border border-gray-200">
                  <h4 className="text-lg font-semibold mb-2">Bio</h4>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {member.bio}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutTeam;
