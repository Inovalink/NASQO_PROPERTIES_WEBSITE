import { redirect } from "next/navigation";
import { servicesPageData } from "../Data/AppData";

export default function ServicesPage() {
  const firstService = servicesPageData[0];
  if (!firstService?.slug) {
    return (
      <div className="min-h-screen flex items-center justify-center p-20">
        <p className="text-neutral-600 text-lg">No services available.</p>
      </div>
    );
  }
  redirect(`/Services/${firstService.slug}`);
}
