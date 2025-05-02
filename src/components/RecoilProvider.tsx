"use client";

import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

export default function RecoilProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <RecoilNexus />
      {children}
    </RecoilRoot>
  );
}
