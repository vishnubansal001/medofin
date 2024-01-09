"use client";
import { Typography, Avatar } from "@material-tailwind/react";
import Logo from '../../assets/Logo.png'



const SITEMAP = [
  {
    title: "Quick Links",
    links: ["About Us", "Event Calender", "Contact Us"],
  },
  {
    title: "Social Link",
    links: ["Instagram", "Twitter", "GitHub", "Linkedin"],
  },
  {
    title: "Meet Us ",
    links: [
      "+91 123456789",
      "Medofin.com",
      "Medofin Solutions Pvt. Ltd.\nPunjab, 140041",
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full bg-black  pb-4">
      <div className="mx-auto w-full max-w-7xl px-8 ">
        <div className=" ml-4 mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="text-white flex flex-col gap-4 items-start justify-start">
            <div className="flex items-center justify-center gap-2">
              <Avatar
                size="sm"
                variant="circular"
                src={Logo}
                alt="tania andrew"
              />
              <p className=" text-2xl uppercase tracking-widest font-bold text-[#2a8981]">
                Medofin
              </p>
            </div>
            <p className="w-3/4 text-base text-[#a9a9a9]">
              Meet Medofin! We’re here to revolutionize healthcare and bring your clinic experience online.
            </p>
            <div className=" flex p-[1rem] justify-between align-middle items-center gap-2">


            </div>
          </div>

          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                className="mb-4 font-bold uppercase text-white text-2xl"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    className="font-normal text-gray-600 hover:text-white text-xl"
                  >
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Typography
          variant="small"
          className="mb-4 text-center font-normal text-white md:mb-0"
        >
          &copy; {currentYear} <a href="#">Medofin</a>. All Rights
          Reserved.
        </Typography>
      </div>
    </footer>
  );
}
