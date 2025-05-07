"use client";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname } from "next/navigation";
import tw from "tailwind-styled-components";

const FooterWrap = tw.footer`w-full z-1`;
const BottomTabWrap = tw.nav`flex justify-between items-center gap-6 border-t border-[#dedede]`;
const TabItemWrap = tw.div`flex-1`;
const TabItem = tw.div`flex flex-col items-center gap-1 text-[0.6rem] text-[#555555] text-semibold pt-1 pb-2 transition-all duration-100 ease-in-out`;

const BottomTabs = () => {
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const auth = queryClient.getQueryData(["auth"]);

  const HomeIcon = () => {
    return (
      <svg
        className="w-6 h-6"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" />
      </svg>
    );
  };

  const TipIcon = () => {
    return (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M288,464H224a16,16,0,0,0,0,32h64a16,16,0,0,0,0-32Z" />
        <path d="M304,416H208a16,16,0,0,0,0,32h96a16,16,0,0,0,0-32Z" />
        <path d="M369.42,62.69C339.35,32.58,299.07,16,256,16A159.62,159.62,0,0,0,96,176c0,46.62,17.87,90.23,49,119.64l4.36,4.09C167.37,316.57,192,339.64,192,360v24a16,16,0,0,0,16,16h24a8,8,0,0,0,8-8V274.82a8,8,0,0,0-5.13-7.47A130.73,130.73,0,0,1,208.71,253,16,16,0,1,1,227.29,227c7.4,5.24,21.65,13,28.71,13s21.31-7.78,28.73-13A16,16,0,0,1,303.29,253a130.73,130.73,0,0,1-26.16,14.32,8,8,0,0,0-5.13,7.47V392a8,8,0,0,0,8,8h24a16,16,0,0,0,16-16V360c0-19.88,24.36-42.93,42.15-59.77l4.91-4.66C399.08,265,416,223.61,416,176A159.16,159.16,0,0,0,369.42,62.69Z" />
      </svg>
    );
  };

  const UserIcon = () => {
    return (
      <svg
        className="w-6 h-6"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" />
        <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" />
      </svg>
    );
  };

  const getUserLink = () => {
    console.log("getUserLink", auth ? "/user" : "/login");
    return auth ? "/user" : "/login";
  };

  return (
    <FooterWrap>
      <BottomTabWrap>
        <TabItemWrap>
          <Link href="/home" passHref>
            <TabItem className={`${pathname === "/home" && "text-[#44bb44]"}`}>
              <HomeIcon />홈
            </TabItem>
          </Link>
        </TabItemWrap>
        <TabItemWrap>
          <Link href="/tip" passHref>
            <TabItem className={`${pathname === "/tip" && "text-[#44bb44]"}`}>
              <TipIcon />
              꿀팁
            </TabItem>
          </Link>
        </TabItemWrap>
        <TabItemWrap>
          <Link href={getUserLink()} passHref>
            <TabItem
              className={`${
                (pathname === "/user" || pathname === "/login") &&
                "text-[#44bb44]"
              }`}
            >
              <UserIcon />내 정보
            </TabItem>
          </Link>
        </TabItemWrap>
      </BottomTabWrap>
    </FooterWrap>
  );
};
export default BottomTabs;
