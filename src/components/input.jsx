export default function DeliveryBadge({ text, color }) {
  return (
    <div className={`px-6 py-3 rounded-full border ${color}`}>
      {text}
    </div>
  )
}