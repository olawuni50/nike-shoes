"use client"
import {useState} from 'react'
import {Button, ShoeCard} from '@/Components'
import { shoes, statistics } from '@/constants'
import Image from 'next/image'
import { bigShoe1 } from '@/assets/images'

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

    
    return(
        <section id="home" className="w-full min-h-screen
         flex justify-center max-container p-2 gap-10 xl:flex-row flex-col">

            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red">Our Summer Collection </p>

                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival </span>
                    <br />
                    <span className="text-coral-red inline-block mt-3">Nike</span>  Shoes
                </h1>
                <p className="font-montserrat text-slate-gray leading-8 mt-6 text-lg
                 mb-10 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your
                    active life </p>
                    <Button label="Show now" iconUrl={'/arrow-right.svg'} />
                    
                    <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
                        {statistics.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-2xl font-palanquin font-md">{stat.value} </p>
                                <p className="leading-7 font-montserrat text-slate-gray">{stat.label} </p>

                                </div>
                        ))}
                    </div>
                </div>

                <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary
                bg-hero bg-cover bg-center">
                    <Image src={bigShoeImg} alt="show" width={510} height={400} 
                    className="z-10 relative object-contain" />

                    <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe) => (
                        <div>
                            <ShoeCard imgUrl={shoe} changeBigShoeImage={(shoe:any)=> setBigShoeImg(shoe)}
                             bigShoeImg={bigShoeImg} />                         
                            </div>
                    ))}
                </div>

                </div>

               
        </section>

    )
}

export default Hero