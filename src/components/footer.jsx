import React from 'react'

function Footer() {
  return (
    <footer>
        <section className='sm:w-[1380px] w-[400px] sm:h-[161px] h-[240px] p-[0px] rounded-[30px] bg-[#B89683] m-auto flex flex-col justify-center sm:gap-[150px] sm:flex-row gap-[30px]'>
            
            <div className='text-white text-center sm:text-start'>
                <h1 className='sm:text-[48px] text-[24px] font-semibold'>Будьте всегда в курсе!</h1>
                <p className='text-[16px] sm:w-[583px] w-[325px] text-center m-auto sm:m-auto'>Подпишитесь на рассылку и будьте всегда в курсе новинок, акций и новостей!</p>
            </div>
            <div className='flex flex-col sm:flex-row justify-center gap-[30px] '>
                <input type="text" placeholder='Укажите вашу почту' className='bg-[#FAF6F2] w-[352px] h-[47px] rounded-[40px] pl-[20px] m-auto sm:m-auto'   />
                <button className='w-[203px] h-[48px] text-[#4D8F76] hover:bg-[#4D8F76] hover:text-white  border-[#4D8F76] border-2 rounded-[40px] m-auto sm:m-auto'>Подписаться</button>
            </div>
        </section>

    <div className=" py-10">
      <div className="max-w-[1380px] m-auto px-4">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div className="flex flex-col lg:flex-row gap-10 text-[#3a3a3a] text-[16px]">
            <p className="font-semibold">+7 988 500-1-700</p>
            <p>hello@pora-poest.com</p>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-[#4f8f73] rounded-full"></div>
            <div className="w-10 h-10 bg-[#4f8f73] rounded-full"></div>
            <div className="w-10 h-10 bg-[#4f8f73] rounded-full flex items-center justify-center">
              <span className="text-white text-sm">ig</span>
            </div>
          </div>

        </div>

        <div className="mt-6 text-[14px] text-[#6b6b6b] space-y-2 max-w-[900px]">
          <p>
            ООО «ПораПоесть», г. Краснодар, ул. Кубанская Набережная улица,
            дом 5, офис 4
          </p>

          <p>
            © 2021 ПораПоесть — сервис доставки прогрессивного питания.
          </p>

          <p className="text-[12px]">
            Фотографии блюд на сайте являются вариантом сервировки блюда.
            Внешний вид блюд может отличаться от фотографии на сайте.
            Указывая электронную почту и номер телефона на сайте, вы
            соглашаетесь с условиями Публичной оферты и Политикой
            конфиденциальности
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-6 lg:justify-end">
          <div className="bg-[#4a4a4a] text-white px-3 py-1 text-sm rounded">VISA</div>
          <div className="bg-[#4a4a4a] text-white px-3 py-1 text-sm rounded">Mastercard</div>
          <div className="bg-[#4a4a4a] text-white px-3 py-1 text-sm rounded">МИР</div>
          <div className="bg-[#4a4a4a] text-white px-3 py-1 text-sm rounded">Apple Pay</div>
          <div className="bg-[#4a4a4a] text-white px-3 py-1 text-sm rounded">G Pay</div>
        </div>

      </div>
    </div>
    </footer>
  )
}

export default Footer