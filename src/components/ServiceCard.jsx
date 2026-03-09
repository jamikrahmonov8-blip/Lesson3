export default function ServiceCard({ icon, title, text }) {
  return (
    <div className="flex flex-col gap-3 max-w-[290px]">
      <div className="flex justify-center sm:justify-start">
      <img src={icon} className="w-[40px]" />
              </div>

      <h3 className="font-semibold text-[16px]">
        {title}
      </h3>

      <p className="text-[13px] text-gray-500">
        {text}
      </p>
    </div>
  )
}   