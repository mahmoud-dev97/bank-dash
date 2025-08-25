import MainLayout from "@/components/layouts/StandardLayout";

function layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}

export default layout;
