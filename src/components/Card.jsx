export default function MealCard({ img, title, weight, calories }) {
  return (
    <div className="w-[220px] flex flex-col gap-3">
      
      <div className="w-[220px] h-[220px] rounded-full overflow-hidden shadow-lg">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-[12px] text-gray-400">
        {weight}
      </div>

      <div className="text-[14px] font-medium">
        {title}
      </div>

      <div className="text-[12px] text-gray-500">
        {calories}
      </div>

    </div>
  );
}