import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="sticky bottom-0 container w-screen bgAppBlue">
        <div className="flex justify-between py-4 items-center font-semibold">
          <span className="text-base text-white">
            {new Date().getFullYear()} Copyright © RELO
          </span>
          <a href="#top">
            <img src="/Logo.svg" alt="logo" width="90" />
          </a>
          <div>
            <span className="text-sm text-white mr-5">Terms of Use</span>
            <span className="text-sm text-white">Privacy Policy</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
