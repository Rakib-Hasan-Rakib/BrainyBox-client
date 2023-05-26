import React from "react";
import facebookIcon from '../../assets/images/facebook-icon.png'
import twitterIcon from '../../assets/images/twitter-icon.png'
import instagramIcon from '../../assets/images/instagram-icon.png'
import linkedinIcon from '../../assets/images/linkedIn.png'

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="md:grid md:grid-cols-4 gap-6 py-8 w-11/12 mx-auto">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-center text-3xl font-bold">BrainyBox</h1>
        </div>
        <div className="flex justify-around col-span-2">
          <div>
            <h2 className="text-xl md:text-2xl">Some important links </h2>
            <ul className="my-2 text-sm">
              <li className="cursor-pointer hover:text-blue-600">About Us</li>
              <li className="cursor-pointer hover:text-blue-600">Contact Us</li>
              <li className="cursor-pointer hover:text-blue-600">FAQs</li>
              <li className="cursor-pointer hover:text-blue-600">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                Terms & Conditions
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl">Also visit on </h2>
            <ul className="my-2 text-sm">
              <li className="cursor-pointer hover:text-blue-600">
                Partnerships
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                Affiliate Program
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                Store Locator
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                Legal Information
              </li>
              <li className="cursor-pointer hover:text-blue-600">Others</li>
            </ul>
          </div>
        </div>
        <div className="my-6 md:my-0">
          <h2 className="text-xl md:text-2xl text-center md:text-start">
            Follow our socials:
          </h2>
          <div className="flex justify-center md:justify-start items-center gap-4 my-2 md:my-8">
            <img
              className="w-8 cursor-pointer grayscale hover:grayscale-0"
              src={facebookIcon}
              alt=""
            />
            <img
              className="w-8 cursor-pointer grayscale hover:grayscale-0"
              src={twitterIcon}
              alt=""
            />
            <img
              className="w-10 cursor-pointer grayscale hover:grayscale-0"
              src={linkedinIcon}
              alt=""
            />
            <img
              className="w-8 cursor-pointer grayscale hover:grayscale-0"
              src={instagramIcon}
              alt=""
            />
          </div>
        </div>
      </div>
      <hr className="w-4/5 mx-auto" />
      <p className="text-center text-sm py-4">
        <span className="text-blue-700">&#169;</span>2023 BrainyBox all rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
