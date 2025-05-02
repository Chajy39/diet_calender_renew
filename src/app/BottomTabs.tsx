"use client";
import { useQueryClient } from "@tanstack/react-query";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Image, { ImageProps } from "next/image";

const FooterWrap = tw.footer`fixed w-full b-0 l-0`;
const BottomTabWrap = tw.nav`flex justify-between items-center gap-6`;
const TabItemWrap = tw.div`flex-1`;
const TabItem = tw.div`flex flex-col items-center gap-1 text-[0.75rem] text-[#555555] text-semibold py-2`;
const TabImg = tw(Image)<ImageProps>``;

const BottomTabs = () => {
  const queryClient = useQueryClient();
  const auth = queryClient.getQueryData(["auth"]);

  const getUserLink = () => {
    console.log("getUserLink", auth ? "/user" : "/login");
    return auth ? "/user" : "/login";
  };

  return (
    <FooterWrap>
      <BottomTabWrap>
        <TabItemWrap>
          <Link href="/home" passHref>
            <TabItem>
              <TabImg
                src="/svg/ic_home.svg"
                alt="home"
                width={24}
                height={24}
              />
              홈
            </TabItem>
          </Link>
        </TabItemWrap>
        <TabItemWrap>
          <Link href="/tip" passHref>
            <TabItem>
              <TabImg src="/svg/ic_tip.svg" alt="home" width={24} height={24} />
              꿀팁
            </TabItem>
          </Link>
        </TabItemWrap>
        <TabItemWrap>
          <Link href={getUserLink()} passHref>
            <TabItem>
              <TabImg
                src="/svg/ic_user.svg"
                alt="home"
                width={24}
                height={24}
              />
              내 정보
            </TabItem>
          </Link>
        </TabItemWrap>
      </BottomTabWrap>
    </FooterWrap>
  );
};
export default BottomTabs;
