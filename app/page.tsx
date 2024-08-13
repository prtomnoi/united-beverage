import BrandDetail from "./BrandDetail";
import BrandsLogo from "./BrandsLogo";
import ClientsLogo from "./ClientsLogo";
import ContactUs from "./ContactUs";
import Header from "./Header";
import LastestNews from "./LastestNews";
import LatestEvents from "./LatestEvents";

export default function Home() {
  return (
    <main className="min-h-screen py-14 px-4">
      <Header />
      <BrandDetail />
      <BrandsLogo />
      <ClientsLogo />
      {/* <LastestNews /> */}
      <LatestEvents />
      <ContactUs />
    </main>
  );
}
