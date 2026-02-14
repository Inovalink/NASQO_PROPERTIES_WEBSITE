"use client";

import { usePathname } from "next/navigation";
import CallToAction from "./CallToAction";

const CallToActionWrapper: React.FC = () => {
  const pathname = usePathname();
  const isContactPage =
    pathname === "/Contact" ||
    pathname === "/contact" ||
    pathname.toLowerCase() === "/contact";

  if (isContactPage) return null;

  return <CallToAction />;
};

export default CallToActionWrapper;
