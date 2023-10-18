'use client'
import Image from 'next/image'

interface Props{
    imgUrl: any,
    changeBigShoeImage: any,
    bigShoeImg: any
}

const ShoeCard = ({imgUrl, changeBigShoeImage, bigShoeImg}: Props) =>{
    
    const handleClick = () =>{
        if(bigShoeImg !== imgUrl.bigShoe) {
            changeBigShoeImage(imgUrl.bigShoe)
        }

    }

    return(
        <div className={`border-2 rounded-xl ${bigShoeImg === imgUrl.bigShoe 
        ? 'border-coral-red': 'border-transparent'} cursor-pointer
        max-sm:flex-1`} onClick={handleClick}>

            <div className="flex justify-center items-center bg-gray-300
            sm:w-40 sm:h-40 bg-cover rounded-xl max-sm:p-4 ">
            <Image src={imgUrl.thumbnail} alt="shoe collection" 
            width={127} height={103} className="object-contain" />
            </div>

        </div>

    )
}

export default ShoeCard
