import React from 'react'
import logo from "../assets/logo.png"
import ita from "../assets/ite.png"
import menu from "../assets/menu.png"
function Header() {
  return (
  <header>
    <div className='sm:w-[100%] w-[100%] m-auto sm:text-[24px] text-[14px] text-white h-[60px] flex justify-center sm:gap-[200px] gap-[10px] font-bold bg-[#A98C64] items-center'>
<p className=''>Скидка 10% при заказе от 2х недель</p>
<p>Заказать</p>
</div>
<article className='flex max-w-[1420px] m-auto justify-between p-[30px]'>
    <img src={logo} alt=""  width={139.5126495361328}/>
  <div className=' hidden sm:flex gap-[20px]'>
    <p>Подбор рациона</p>
    <p>Программы питания</p>
    <p>Программы питания</p>
    <p>Доставка</p>
    <p>Акции</p>
    <p>Акции</p>
    <p>Отзывы</p>
  </div>
  <div>
    <p className='text-[24px] font-bold text-[#493E3E] hidden sm:flex'>+7 988 500-1-700</p>
    <img className='sm:hidden ' src={menu} alt="" width={41}  />
  </div>
</article>
<section className='flex max-w-[1370px] m-auto justify-between  items-center sm:flex-row flex-col'>
    <aside className='flex flex-col gap-[30px]'>
        <h1 className='w-[412px] sm:w-[712px] m-auto sm:m-[0px] font-semibold text-[35px] sm:text-[60px]'>Прогрессивное питание на каждый день</h1>
        <p className='sm:w-[503px] w-[400px] m-auto sm:m-[0px]'>Сбалансированный рацион в  современном формате — Супер-боул</p>
        <div className='flex gap-[30px] sm:flex-row '>
            <button className='w-[203px] h-[48px] text-[#4D8F76] hover:bg-[#4D8F76] hover:text-white  border-[#4D8F76] border-2 rounded-[40px]'>Подобрать питание</button>
            <button className='sm:w-[237px] w-[143px] h-[48px] text-[#4D8F76] hover:bg-[#4D8F76] hover:text-white border-[#4D8F76] border-2 rounded-[40px] '>Подобрать питание</button>
        </div>
    </aside>
    <aside>
        <div className='sm:w-[274px] sm:h-[274px] w-[144.85101318359375px] h-[144.85101318359375px]  bg-[#E2DDC0] rounded-[100%] absolute z-[-3] sm:top-[500px] top-[690px]'></div>
        <img src={ita} alt="" width={618} />
        <div className='sm:w-[117px] sm:h-[117px] bg-[#6D9988] absolute w-[61.85243606567383px] h-[61.85243606567383px]  rounded-[100%] sm:top-[270px] top-[520px] sm:right-[110px] right-[60px]'></div>
    </aside>
</section>
  </header>
  )
}

export default Header