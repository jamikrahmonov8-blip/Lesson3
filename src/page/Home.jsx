import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import CalorieCard from "../components/СalorieCard";
import DurationCard from "../components/DurationCard";
import MealCard from "../components/Card";
import DeliveryBadge from "../components/input";
import ServiceCard from "../components/ServiceCard";

import map from "../assets/image copy 4.png";

import img1 from "../assets/image.png";
import img2 from "../assets/image copy.png";
import img3 from "../assets/image copy 2.png";
import img4 from "../assets/image copy 3.png";

import img5 from "../assets/image copy 5.png";
import img6 from "../assets/image copy 6.png";
import img7 from "../assets/image copy 7.png";
import img8 from "../assets/image copy 8.png";
import img9 from "../assets/image copy 9.png";
import img10 from "../assets/image copy 10.png";

import img11 from "../assets/image copy 11.png";
import img12 from "../assets/image copy 12.png";
import img13 from "../assets/image copy 13.png";
import img14 from "../assets/image copy 14.png";

import PromoCards from "../components/Section1"
import FAQ from "../components/Section2"
import DietConsultation from "../components/Section3"
import Reviews from "../components/Section4"
import DietPlan from "../components/Section5"





function Home() {
  const meals = [
    {
      img: img1,
      title: "Тунец с зелёным яблоком",
      weight: "Завтрак 300 г",
    },
    {
      img: img2,
      title: "Донская рыба в клюквенном маринаде",
      weight: "Ланч 180 г",
    },
    {
      img: img3,
      title: "Жульен из морепродуктов",
      weight: "Обед 275 г",
    },
    {
      img: img4,
      title: "Куриная каша с куриным филе",
      weight: "Ужин 415 г",
    },
  ];

  const services = [
    {
      icon:img5,
      title: "Мы жарим на сухом гриле через пергамент, запека ем в су-вид",
      text: "Профессиональная команда поваров гарантирует вам прекрасный вкус и качество блюд",
    },
    {
      icon:img6,
      title: "Регулярное обновление меню",
      text: "Каждую неделю новое меню, без повтора блюд",
    },
    {
      icon: img7,
      title: "Здоровые рецепты",
      text: "Без молочки, белой муки, сахара, консервантов, усилителей вкуса и глубокой прожарки",
    },
    {
      icon: img8,
      title: "Гарантия возврата",
      text: "100%-ная гарантия возврата денежных средств за предоплаченные дни, если что-то не понравилось в течение первой недели",
    },
    {
      icon: img9,
      title: "Контроль температуры",
      text: "Все курьеры оснащены сумками-холодильниками, что позволяет сохранять температурный режим от 2°C до 4°C от кухни до ваших рук",
    },
    {
      icon: img10,
      title: "Забота о природе",
      text: "Наш курьер заберёт пластиковую упаковку для передачи на вторичную переработку",
    },
  ];

  return (
    <section>
      <Header />


      <section className="py-20">
        <div className="max-w-[1380px] mx-auto px-4">
          <h2 className="text-[28px] lg:text-[34px] font-semibold mb-8">
            Программа питания
          </h2>

          <p className="text-[14px] text-gray-500 mb-4">Калорийность</p>

          <div className="flex flex-wrap gap-4 justify-between mb-10">
            <CalorieCard kcal="900" meals="3 блюда" />

            <CalorieCard kcal="1250" meals="4 блюда" active />

            <CalorieCard kcal="1600" meals="5 блюд" />

            <CalorieCard kcal="2050" meals="6 блюд" />

            <CalorieCard kcal="индивидуально" meals="подобрать" />
          </div>

          <p className="text-[14px] text-gray-500 mb-4">Продолжительность</p>

          <div className="flex flex-wrap gap-4 justify-between mb-14">
            <DurationCard title="Пробные 2 дня" sub="за 2 900 ₽" />

            <DurationCard title="1 неделя" sub="1700 ₽ в день" />

            <DurationCard title="2 недели" sub="1600 ₽ в день" active />

            <DurationCard title="3 недели" sub="1520 ₽ в день" />

            <DurationCard title="4 недели" sub="1450 ₽ в день" />
          </div>


          <div className="flex flex-wrap gap-3 mb-10">
            <button className="px-4 py-2 bg-white rounded-full border">
              понедельник
            </button>

            <button className="px-4 py-2 bg-white rounded-full border">
              вторник
            </button>

            <button className="px-4 py-2 bg-white rounded-full border">
              четверг
            </button>

            <button className="px-4 py-2 bg-[#d7c3a8] rounded-full border">
              пятница
            </button>

            <button className="px-4 py-2 bg-white rounded-full border">
              суббота
            </button>

            <button className="px-4 py-2 bg-white rounded-full border">
              воскресенье
            </button>
          </div>

          <div className="flex gap-10 overflow-x-auto pb-4 justify-between">
            {meals.map((meal, i) => (
              <MealCard
                key={i}
                img={meal.img}
                title={meal.title}
                weight={meal.weight}
              />
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-16">
        <div className="max-w-[1380px] mx-auto px-4">
          <h2 className="text-[26px] lg:text-[32px] font-semibold mb-10">
            О нашем сервисе
          </h2>

          <div className="flex justify-between flex-col sm:flex-row flex-wrap max-w-[1100px] gap-[30px]  items-center text-center sm:text-start">
            {services.map((s, i) => (
              <ServiceCard key={i} {... s} />
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-10 mt-14">
            <div className="max-w-[520px]">
              <p className="text-[14px] text-gray-500 mb-5">
                Доставка правильного питания
              </p>

              <h3 className="text-[#2e7d6b] font-semibold text-[18px] lg:text-[20px] mb-4">
                Уникальность проекта заключается в объединении медицинских
                знаний
              </h3>

              <p className="text-[14px] text-gray-500">
                Программа питания разработана шеф-поварами
              </p>
            </div>

            <div className=" flex items-center gap-[20px] flex-col sm:flex-row ">
              <div>
              <img src={img11} className="rounded-xl w-[255px]" />
              <img src={img12} className="rounded-xl w-[255px]" />
                              </div>
              <img src={img13} className="rounded-xl w-[256px]" />
              <img src={img14} className="rounded-xl w-[255px] h-[181px] " />
            </div>
          </div>
        </div>
      </section>

      

      <section className="bg-[#ebe4d8] max-w-[1380px] mx-auto py-16 rounded-[20px]">
        <div className="max-w-[1348px] mx-auto px-4">
          <h2 className="text-[24px] lg:text-[28px] font-semibold mb-4">
            Карта доставки
          </h2>

          <p className="text-gray-500 mb-8">
            Доставка осуществляется каждый день с 06:00 до 12:00
          </p>

          <div className="flex flex-col lg:flex-row gap-10">
            <img src={map} className="w-full lg:max-w-[900px] rounded-lg" />

            <div className="flex flex-col gap-4">
              <DeliveryBadge
                text="По городу бесплатно"
                color="border-green-600 text-green-700"
              />

              <DeliveryBadge
                text="Пригород 25 км — 100 ₽"
                color="border-yellow-500 text-yellow-700"
              />

              <DeliveryBadge
                text="Пригород 35 км — 300 ₽"
                color="border-orange-500 text-orange-700"
              />

              <DeliveryBadge
                text="Пригород 50 км — 500 ₽"
                color="border-red-500 text-red-700"
              />

              <p className="mt-6 font-semibold">+7 988 500-1-700</p>

              <button className="bg-green-700 text-white px-6 py-3 rounded-full">
                Перезвоните мне
              </button>
            </div>
          </div>
        </div>
      </section>
 <div className="bg-[#F5F1EC] py-10">
      <div className="max-w-[1340px] m-auto flex flex-col gap-16">

        <PromoCards />

        <FAQ />

        <DietConsultation />

        <Reviews />

        <DietPlan />

      </div>
    </div>
      <Footer />
    </section>
  );
}

export default Home;
