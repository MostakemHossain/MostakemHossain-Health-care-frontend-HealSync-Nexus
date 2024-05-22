import DashboardDrawer from "@/components/DashBoard/DashBoardDrawer/DashBoardBrawer";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashBoardLayout;
