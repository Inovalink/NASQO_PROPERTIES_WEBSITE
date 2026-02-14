import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Mail,
  Instagram,
  Linkedin,
  Palette,
  CircleDot,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Lands", label: "Lands" },
  { href: "/Properties", label: "Home and Apartments" },
  { href: "/Contact", label: "Contact Us" },
];

const services = [
  "Land Acquisition",
  "General Construction",
  "Facilities Management",
  "Project Management",
  "Architecture and Engineering",
  "Interior Design",
];

const socialLinks = [
  { href: "https://behance.net", label: "Behance", icon: Palette },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://dribbble.com", label: "Dribbble", icon: CircleDot },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
];

const Footer: React.FC = () => {
  return (
    <footer
      className="footer w-full bg-[#191723] text-white font-mona"
      role="contentinfo"
    >
      <div className="footer_content mx-[5%] md:mx-[8%] xl:mx-[10%] py-12 md:py-16 xl:py-20">
        {/* Top Section - 4 Columns */}
        <div className="footer_columns grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
          {/* Column 1 - Brand */}
          <div className="footer_brand flex flex-col gap-4">
            <Link href="/" className="inline-block w-fit">
              <Image
                src="/Main_Assets/Main_Logo.svg"
                alt="NASQO Properties"
                width={192}
                height={144}
                className="w-24 sm:w-28 md:w-36 lg:w-40 xl:w-44 2xl:w-48 h-auto object-contain"
              />
            </Link>
            <p className="font-bricolage font-semibold text-white uppercase tracking-wide text-sm md:text-base">
              NASQO PROPERTIES
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer_links">
            <h3 className="font-bricolage font-semibold text-base md:text-lg mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-white text-sm md:text-base transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div className="footer_services">
            <h3 className="font-bricolage font-semibold text-base md:text-lg mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-white/90 text-sm md:text-base"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div className="footer_contact">
            <h3 className="font-bricolage font-semibold text-base md:text-lg mb-4">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />
                <a href="tel:+233596703856" className="hover:text-white transition-colors">
                  +233 596703856
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />
                <span>Kumasi-Ashanti Region</span>
              </li>
              <li className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />
                <a
                  href="mailto:homely@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  homely@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                <span className="w-4 h-4 mt-0.5 shrink-0 flex items-center justify-center text-xs">
                  P.O.
                </span>
                <span>PO Box 1324</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/20 my-8 md:my-10 xl:my-12" />

        {/* Bottom Section - Copyright & Social */}
        <div className="footer_bottom flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-white/60 text-sm md:text-base order-2 sm:order-1">
            Copyright © 2025. All Rights Reserved
          </p>
          <div className="flex items-center gap-4 order-1 sm:order-2">
            <span className="text-white/60 text-sm md:text-base">Find us on</span>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#4361EE] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
