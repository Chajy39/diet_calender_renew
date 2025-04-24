import tw from "tailwind-styled-components";

const FooterWrap = tw.footer`fixed w-full b-0 l-0`;
const BottomTabWrap = tw.nav`flex justify-between items-center gap-6`;
const TabItem = tw.a`flex-1 flex flex-col items-center gap-1 text-[0.75rem] text-[#555555] text-semibold py-2`;
const TabImg = tw.img`w-5 h-5`;

const BottomTabs = () => {
  return (
    <FooterWrap>
      <BottomTabWrap>
        <TabItem href="/home">
          <TabImg src="/svg/ic_home.svg" alt="home" />홈
        </TabItem>
        <TabItem href="/tip">
          <TabImg src="/svg/ic_tip.svg" alt="home" />
          꿀팁
        </TabItem>
        <TabItem href="/user">
          <TabImg src="/svg/ic_user.svg" alt="home" />내 정보
        </TabItem>
      </BottomTabWrap>
    </FooterWrap>
  );
};
export default BottomTabs;
