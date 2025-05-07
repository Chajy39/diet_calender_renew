import RecoilProvider from "@/components/RecoilProvider";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RecoilProvider>{children}</RecoilProvider>;
}
