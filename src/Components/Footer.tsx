import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import Image from "next/image";
import logo from "../../public/Group.svg";

const footerLinks = [
  {
    title: "Useful Link's",
    links: [
      {
        label: "About Us",
        href: "/",
      },
      {
        label: "Services",
        href: "/",
      },
      {
        label: "Showcase",
        href: "/",
      },
      {
        label: "Contact us",
        href: "/",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Help Center",
        href: "/",
      },
      {
        label: "Privacy Policy",
        href: "/",
      },
      {
        label: "Terms & Condition",
        href: "/",
      },
      {
        label: "Contact us",
        href: "/",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "+889638786898",
        href: "/",
      },
      {
        label: "info@acronation.net",
        href: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-[#F3F9FF] py-10 px-8">
        <div className="max-w-screen-lg w-full mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center font-bold">
            Stay In Touch for the{" "}
            <span className="text-[#1877F2]">Latest News</span> and{" "}
            <span className="text-[#1877F2]">Support</span>
          </h1>

          <div className="grid sm:grid-cols-[10rem_1fr] gap-10 md:gap-16 pt-8 max-w-screen-md w-full mx-auto">
            <div className="flex flex-col gap-10">
              <div>
                <Image src={logo} alt="logo" width={150} />
              </div>

              {/* social links  */}
              <div className="flex items-center gap-5">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedinIn />
                <FaTwitter />
              </div>
            </div>

            {/* useful links  */}
            <div className="flex flex-col justify-between gap-8 sm:flex-row flex-wrap ">
              {footerLinks.map((linkGroup, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold">{linkGroup.title}</h3>
                  <ul className="space-y-2">
                    {linkGroup.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="hover:underline transition-all"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* useful links  */}
          </div>
        </div>
      </div>

      <p className="text-center py-8 px-4 bg-white">
        Copyright © 2024 ste it com. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
