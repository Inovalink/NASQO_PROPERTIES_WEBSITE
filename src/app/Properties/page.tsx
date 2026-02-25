import { redirect } from "next/navigation";
import { propertiesPageData } from "../Data/AppData";

export default function PropertiesPage() {
  const firstProperty = propertiesPageData[0];
  if (!firstProperty?.slug) {
    return (
      <div className="min-h-screen flex items-center justify-center p-20">
        <p className="text-neutral-600 text-lg">No properties available.</p>
      </div>
    );
  }
  redirect(`/Properties/${firstProperty.slug}`);
}
