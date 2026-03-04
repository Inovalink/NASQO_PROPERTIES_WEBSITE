import React from "react";
import { servicesPageData } from "../../Data/AppData";
import ServiceDetailTemplate from "../ServiceDetailTemplate";

interface PageProps {
  params: Promise<{ slug: string | string[] }>;
}

export function generateStaticParams() {
  return servicesPageData.map((item) => ({ slug: item.slug }));
}

async function ServiceSlugPage({ params }: PageProps) {
  const resolved = await params;
  const slugStr =
    typeof resolved.slug === "string"
      ? resolved.slug
      : Array.isArray(resolved.slug) && resolved.slug.length > 0
        ? resolved.slug[0]
        : "";

  const service = servicesPageData.find((item) => item.slug === slugStr);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center p-20">
        <p className="text-neutral-600 text-lg">Service not found: {slugStr || "(empty)"}</p>
      </div>
    );
  }

  return <ServiceDetailTemplate slug={slugStr} />;
}

export default ServiceSlugPage;
