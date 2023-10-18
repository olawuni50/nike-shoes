import { star } from '@/assets/icons'
import Image from 'next/image'

interface Props{
    imgURL: any,
    name:string,
    price: string
}

const ProductCard = ({imgURL, name, price}: Props) => {
    return(
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <Image src={imgURL} alt={name} className="w-[280px] h-[280px]" />

            <div className="mt-8 flex justify-start gap-2.5">
                <Image src={star} alt="rating" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
            </div>

            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
            <p>{price}</p>
            </div>
    )
}

export default ProductCard