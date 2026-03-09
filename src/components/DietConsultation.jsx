import img from "../assets/image copy 15.png"
export default function DietConsultation() {

  return (

    <section className="bg-[#9DB38C] rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-10 mt-[80px]">

      <div className="text-white max-w-[500px]">

        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          Бесплатная консультация диетолога
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">

          <input
            placeholder="Ваше имя"
            className="px-4 py-2 rounded-full text-black w-full"
          />

          <input
            placeholder="Телефон"
            className="px-4 py-2 rounded-full text-black w-full"
          />

        </div>

        <button className="bg-[#3F7F5A] px-6 py-2 rounded-full">
          Отправить заявку
        </button>

      </div>

      <div className="w-full lg:w-[457px]">
        <img src={img} className="sm:flex hidden absolute w-[340px] top-[4334px]" alt="img" />
      </div>

    </section>

  )
}