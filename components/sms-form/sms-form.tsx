"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

const HeaderButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <MotionWrapper className="flex flex-col items-center gap-2 mt-12">
        <div className="w-max mx-auto h-max bg-white rounded-md animate-bounce-3x">
          <motion.button
            initial={{ "--x": "100%", scale: 1 }}
            animate={{ "--x": "-100%" }}
            whileTap={{ scale: 0.97 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
              type: "spring",
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              },
            }}
            className="subscribe-link cursor-pointer subscribe-button linear-mask "
            onClick={togglePopup}
          >
            Click To Receive SMS Messages
          </motion.button>
        </div>
      </MotionWrapper>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl h-5/6 relative sm:w-10/12 sm:h-4/5 md:w-8/12 md:h-3/4 lg:w-6/12 lg:h-2/3">
            <button
              className="absolute top-2 right-6 text-red-500 hover:text-red-700 font-bold"
              onClick={togglePopup}
            >
              x
            </button>
            <div className="flex flex-col items-center justify-center h-full">
              {/* <h2 className="text-center text-dark text-xl font-bold mt-8">
                Subscribe Now to Receive SMS Updates
              </h2> */}
              <iframe
                src="https://550e8400-e29b-41d4-a716-446655440007.salesmogul.app/widget/form/QJEeIFpzQr7eSUL2QQ0M"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "3px",
                }}
                id="inline-QJEeIFpzQr7eSUL2QQ0M"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Opt-In Form"
                data-height="801"
                data-layout-iframe-id="inline-QJEeIFpzQr7eSUL2QQ0M"
                data-form-id="QJEeIFpzQr7eSUL2QQ0M"
                title="Opt-In Form"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderButton;
