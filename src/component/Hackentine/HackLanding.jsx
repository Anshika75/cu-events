import React from 'react'
import './hacklanding.css'
export default function HackLanding() {
    return (
        <div className='h-screen flex justify-center items-center bg-[#ff758f] w-full'>
            <div class="happy-valentines">
                <div class="valentines-day-card">
                    <div class="clouds"></div>
                    <div class="hearts">
                        <div class="heartOne">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartTwo">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartThree">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartFour">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                        <div class="heartFive">
                            <div class="left-side"></div>
                            <div class="right-side"></div>
                        </div>
                    </div>
                    <div class="text">Happy Valentine's Day</div>
                </div>
                <div className="hover">- hover over the text -</div>
            </div>
        </div>
    )
}
