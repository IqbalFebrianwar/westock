import dynamic from "next/dynamic";

const NavbarUI = dynamic(() => import("@/components/home/navbar"));
const MainPage = dynamic(() => import("@/components/home/mainpage"));
const BannerUI = dynamic(() => import("@/components/home/banner"));
const AllImageUI = dynamic(() => import("@/components/home/allimage"))

export default function Home() {
  return (
    <MainPage>
      <NavbarUI />
      <BannerUI />
      <AllImageUI />
    </MainPage>
  );
}
