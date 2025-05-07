// type NutrientType = {
//   calorie: number;
//   carbo: number;
//   protein: number;
//   fat: number;
// };

const TodayChart = () => {
  return (
    <div className="flex gap-10 px-6">
      <div className="relative w-30 h-30 rounded-full bg-[#cecece] after:content[''] after:w-16 after:h-16 after:absolute after:left-7 after:top-7 after:bg-white after:rounded-full"></div>
      <div className="flex flex-col justify-center gap-2">
        <div className="relative before:content-['탄'] w-30 h-6 before:absolute before:rounded-full before:bg-red before:left-[-20px]">
          <div className={`absolute w-full h-full bg-[#ff0000] rounded-sm`} />
        </div>
        <div className="relative before:content-['단'] w-30 h-6 before:absolute before:rounded-full before:bg-red before:left-[-20px]">
          <div className={`absolute w-full h-full bg-[#00ff00] rounded-sm`} />
        </div>
        <div className="relative before:content-['지'] w-30 h-6 before:absolute before:rounded-full before:bg-red before:left-[-20px]">
          <div className={`absolute w-full h-full bg-[#0000ff] rounded-sm`} />
        </div>
      </div>
    </div>
  );
};
export default TodayChart;
