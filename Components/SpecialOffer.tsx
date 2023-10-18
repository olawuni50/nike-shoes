import Image from "next/image"
import { Button } from "."
import { offer } from "@/assets/images"
import { arrowRight } from "@/assets/icons"



const SpecialOffer = () =>{
    return (

        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10
        max-container">
            <div className="flex-1">
                <Image src={offer} width={773} alt="special Offer" height={687} className="object-contain w-full" />
            </div>

            <div className="flex flex-1 flex-col">
           <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red"> Special </span>
            Offer
    
</h2>
<p className="mt-4 lg:max-w-lg info-text text-justify">Embark on a shopping journey that redefines your experience with unbeatable deals.
 From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
<p className="mt-6 lg:max-w-lg info-text text-justify"> 
   Navigate a realm of possibilities designed to fulfill your unique desires surpassing the loftiest
   expectations. Your journey with us is nothing short of exceptional.
</p>

<div className="mt-11 flex gap-10">
    <Button label="View details"/> 
    <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"  />
    </div>

            </div>

            
            
        </section>

    )
}

export default SpecialOffer