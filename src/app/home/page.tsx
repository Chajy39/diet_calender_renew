import AddButton from "./AddButton";
import CalendarHeader from "./CalendarHeader";
import TodayChart from "./TodayChart";

const Home = () => {
  return (
    <div className="w-full h-full relative">
      <CalendarHeader />
      <TodayChart />
      <AddButton />
    </div>
  );
};
export default Home;
