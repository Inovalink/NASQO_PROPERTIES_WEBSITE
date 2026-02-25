import React from "react";
import { propertiesPageData } from "../../Data/AppData";
import PropertyDetailTemplate from "../PropertyDetailTemplate";

interface PageProps {
  params: Promise<{ slug: string | string[] }>;
}

export function generateStaticParams() {
  return propertiesPageData.map((item) => ({ slug: item.slug }));
}

async function PropertySlugPage({ params }: PageProps) {
  const resolved = await params;
  const slugStr =
    typeof resolved.slug === "string"
      ? resolved.slug
      : Array.isArray(resolved.slug) && resolved.slug.length > 0
        ? resolved.slug[0]
        : "";

  const property = propertiesPageData.find((item) => item.slug === slugStr);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center p-20">
        <p className="text-neutral-600 text-lg">Property not found: {slugStr || "(empty)"}</p>
      </div>
    );
  }

  return <PropertyDetailTemplate slug={slugStr} />;
}

export default PropertySlugPage;
