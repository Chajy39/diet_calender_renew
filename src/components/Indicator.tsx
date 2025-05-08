import tw from "tailwind-styled-components";

const Loader = tw.div`border-12 border-[#f3f3f3] border-t-12 border-t-[#44bb44] rounded-full w-28 h-28 animate-spin`;

const Indicator = () => {
  return <Loader />;
};
export default Indicator;
