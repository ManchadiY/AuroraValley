import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[2rem_1fr] md:grid-cols-[16rem_1fr] h-full gap-5 lg:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
