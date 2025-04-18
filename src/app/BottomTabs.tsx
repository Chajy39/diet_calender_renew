import tw from "tailwind-styled-components";

const FooterWrap = tw.footer`fixed w-full b-0 l-0`;
const BottomTabWrap = tw.nav`flex justify-between items-center gap-6`;
const TabItem = tw.a`flex-1 flex flex-col items-center gap-1 text-[0.75rem] text-[#555555] text-semibold py-2`;

const BottomTabs = () => {
  return (
    <FooterWrap>
      <BottomTabWrap>
        <TabItem href="/home">홈</TabItem>
        <TabItem href="/calendar">꿀팁</TabItem>
        <TabItem href="/user">내 정보</TabItem>
      </BottomTabWrap>
    </FooterWrap>
  );
};
export default BottomTabs;
