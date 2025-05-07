// type NutrientType = {
//   calorie: number;
//   carbo: number;
//   protein: number;
//   fat: number;
// };

const TodayChart = () => {
  return (
    <div className="flex gap-4">
      <div className="rounded-full"></div>
      <div className="flex flex-col gap-2">
        <div className="relative before:content-['탄'] before:absolute before:rounded-full before:bg-red">
          <div className={`absolute w-[50%] h-full bg-red`} />
        </div>
      </div>
    </div>
  );
};
export default TodayChart;
