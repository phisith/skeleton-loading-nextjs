export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container m-auto flex justify-center items-center">
      {children}
    </main>
  );
}
