import PageNavigation from "@/components/PageNavigation";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <PageNavigation />
    </>
  );
}
