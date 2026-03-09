import img1 from "../assets/image copy 16.png"
import img2 from "../assets/image copy 17.png"
import img3 from "../assets/image copy 18.png"
import img4 from "../assets/image copy 19.png"

export default function Reviews() {

  return (

    <section>

      <h2 className="text-2xl font-semibold mb-6">
        Отзывы
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-2">

        <div className="min-w-[240px] bg-white rounded-xl p-2">
          <img src={img1} alt="img" />
        </div>

        <div className="min-w-[240px] bg-white rounded-xl p-2">
          <img src={img2} alt="img" />
        </div>

        <div className="min-w-[240px] bg-white rounded-xl p-2">
          <img src={img3} alt="img" />
        </div>

        <div className="min-w-[240px] bg-white rounded-xl p-2">
          <img src={img4} alt="img" />
        </div>

      </div>

    </section>

  )
}