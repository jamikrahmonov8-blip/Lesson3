export default function PromoCards() {
  return (

    <section>

      <h2 className="text-2xl font-semibold mb-6">
        Акции
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
 

        <div className="bg-[#E6A3A3] rounded-2xl p-6 flex justify-between items-center">

          <div>
            <p className="text-white text-lg">
              Наименование акции
            </p>

            <button className="mt-6 border border-white text-white px-6 py-2 rounded-full">
              Подробнее
            </button>
          </div>
 
          <div className="w-[100px] h-[100px] bg-white rounded-full"></div>

        </div>


  
        <div className="bg-[#8F949C] rounded-2xl p-6 flex justify-between items-center">

          <div>
            <p className="text-white text-lg">
              Наименование акции
            </p>

            <button className="mt-6 border border-white text-white px-6 py-2 rounded-full">
              Подробнее
            </button>
          </div>

      <div className="w-[100px] h-[100px] bg-white rounded-full"></div>

        </div>

      </div>

    </section>
  )
}