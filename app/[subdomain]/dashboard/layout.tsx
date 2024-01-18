import CheckIfAuthenticated from "@/components/CheckIfAuthenticated";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <CheckIfAuthenticated />
      {children}
    </div>
  );
}
