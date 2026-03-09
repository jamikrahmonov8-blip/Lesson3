export default function DurationCard({ title, sub, active }) {
  return (
    <div
      className={`px-6 py-4 rounded-[18px] border cursor-pointer
      ${active ? "bg-[#d7c3a8]" : "bg-white"} w-[220px] text-center
      `}
    >
      <p className="text-[14px] font-medium">{title}</p>
      <p className="text-[12px] text-gray-400">{sub}</p>
    </div>
  )
}