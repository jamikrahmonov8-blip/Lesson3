export default function CalorieCard({ kcal, meals, active }) {
  return (
    <div
      className={`px-6 py-4 rounded-[18px] border text-center cursor-pointer
      ${active ? "bg-[#d7c3a8]" : "bg-white"} w-[220px]
      `}
    >
      <p className="text-[18px] font-semibold">{kcal} ккал</p>
      <p className="text-[12px] text-gray-500">{meals}</p>
    </div>
  )
}