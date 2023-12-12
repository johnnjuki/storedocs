type UnauthenticatedLayoutProps = {
  children: React.ReactNode;
};

export default function UnauthenticatedLayout({children}: UnauthenticatedLayoutProps) {
  return (
    <main className="flex justify-center items-center h-screen">
      {children}
    </main>
  )
}
