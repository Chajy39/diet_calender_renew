import RecoilProvider from "@/components/RecoilProvider";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
