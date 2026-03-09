const questions = [
  "Как я могу оплатить заказ?",
  "Могу ли я изменить адрес и время доставки?",
  "Могу ли я перенести день доставки?",
  "Могу ли я приостановить доставку?"
]

export default function FAQ() {
  return (
    <section>

      <h2 className="text-2xl font-semibold mb-6">
        Частые вопросы
      </h2>

      <div className="flex flex-wrap gap-3 mb-6">

        <button className="px-4 py-2 bg-white rounded-full text-sm">
          Продукты
        </button>

        <button className="px-4 py-2 bg-white rounded-full text-sm">
          Программы
        </button>

        <button className="px-4 py-2 bg-white rounded-full text-sm">
          Оплата и доставка
        </button>

        <button className="px-4 py-2 bg-white rounded-full text-sm">
          Хранение
        </button>

      </div>

      <div className="flex flex-col gap-3">

        {questions.map((q, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5"
          >

            <div className="flex justify-between">
              <p>{q}</p>
              <span>+</span>
            </div>

            <p className="text-gray-500 text-sm mt-3">
              Наши курьеры доставляют заказы ежедневно с 19:00 до 23:00
            </p>

          </div>
        ))}

      </div>

    </section>
  )
} 