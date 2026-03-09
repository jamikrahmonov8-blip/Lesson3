export default function DietPlan() {

  return (

    <section className="flex flex-col md:flex-row items-center justify-between gap-10">

      <div>

        <h2 className="text-2xl font-semibold mb-3">
          Пробный рацион
        </h2>

        <p className="text-gray-500 mb-6">
          Стоимость: 750₽ <br />
          Пробное меню на 1 день из программы на 1800 К
        </p>

        <button className="bg-[#3F7F5A] text-white px-6 py-2 rounded-full">
          Попробовать
        </button>

      </div>

      <div className="w-[240px]">
        <img src="" alt="img" />
      </div>

    </section>

  )
}