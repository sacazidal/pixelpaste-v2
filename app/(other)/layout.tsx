export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen px-4 max-w-screen-2xl mx-auto">
      <main className="grow">{children}</main>
    </div>
  );
}
