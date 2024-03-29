import React from 'react'
import './hacklanding.css'
import calendar from '../../assets/calendar.png'
import venue from '../../assets/venue.png'
export default function HackLanding() {
    return (
        <div id={"hackhome"} className='lg:h-[110vh] h-screen flex justify-center items-center w-full'>
            <div className="happy-valentines w-full h-full">
                <div className="valentines-day-card grid place-items-center">
                    <div className="clouds"></div>
                    <div className="hearts">
                        <div className="heartZero hidden lg:block">
                            <div className="left-side"></div>
                            <div className="right-side"></div>
                        </div>
                        <div className="heartOne">
                            <div className="left-side"></div>
                            <div className="right-side"></div>
                        </div>
                        <div className="heartTwo hidden lg:block">
                            <div className="left-side"></div>
                            <div className="right-side"></div>
                        </div>
                        <div className="heartThree hidden lg:block">
                            <div className="left-side"></div>
                            <div className="right-side"></div>
                        </div>
                        <div className="heartFour">
                            <div className="left-side"></div>
                            <div className="right-side"></div>
                        </div>
                        <div className="heartFive hidden lg:block">
                            <div className="left-side"></div>
                            <div className="right-side"></div>
                        </div>
                        <div className="heartSix hidden lg:block">
                            <div className="left-side"></div>
                            <div className="right-side"></div>
                        </div>
                        <div className="heartSeven hidden lg:block">
                            <div className="left-side"></div>
                            <div className="right-side"></div>
                        </div>
                        <div className="heartEight">
                            <div className="left-side"></div>
                            <div className="right-side"></div>
                        </div>
                        <div className="heartNine hidden lg:block">
                            <div className="left-side"></div>
                            <div className="right-side"></div>
                        </div>
                        <div className="heartTen">
                            <div className="left-side"></div>
                            <div className="right-side"></div>
                        </div>
                        <div className="heartEleven hidden lg:block">
                            <div className="left-side"></div>
                            <div className="right-side"></div>
                        </div>

                    </div>
                    <div className="text-cont z-50 flex flex-col justify-center items-center">
                        <p className="chip text-center text-5xl px-4 lg:text-8xl text opacity-0 -mt-24 lg:mt-0">Hackentine's Quest</p>
                        <a className='z-20' href="">
                            <button className=' bg-[#A2171C] text-[#ffe8e8] z-20 mt-8 px-5 opacity-0 btn py-3 text-xl lg:text-3xl transition-all hover:scale-95 cursor-pointer'>Register with Devfolio</button>
                        </a>
                    <div className="details px-8 lg:px-0 lg:mt-12 w-full flex flex-col mt-8 lg:flex-row justify-center lg:justify-between items-center opacity-0 z-50">
                        <div className="flex items-center w-full lg:w-[50%] justify-center my-2 lg:my-0 lg:justify-around h-8 lg:h-16 lg:mr-6">
                            <img className='h-full' src={calendar} alt="" />
                            <p className='chip text-[#ffe8e8] text-xl lg:text-3xl ml-3 opacity-75'>21-24 <sup>th</sup> Feb, 2024 <sub className='text-xs'>Online</sub></p>
                        </div>
                        <div className="flex items-center w-full lg:w-[50%] justify-center my-2 lg:my-0 lg:justify-around h-8 lg:h-16 lg:ml-6">
                            <img className='h-full' src={calendar} alt="" />
                            <p className='chip text-[#ffe8e8] text-xl lg:text-3xl opacity-75'>27-28 <sup>th</sup> Feb, 2024 <sub className='text-xs'>Offline</sub></p>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
