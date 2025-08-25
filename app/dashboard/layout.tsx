import StandardLayout from "@/components/layouts/StandardLayout";

function layout({ children }: { children: React.ReactNode }) {
  return <StandardLayout>{children}</StandardLayout>;
}

export default layout;
