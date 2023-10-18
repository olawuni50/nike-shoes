interface Props{
    label: string,
    iconUrl?: string,
    backgroundColor?: string,
    textColor?: string,
    borderColor?: string,
    fullWidth?: boolean,
}

const Button = ({label, iconUrl, backgroundColor, textColor, borderColor, fullWidth}: Props) => {
    return(
        <button className={`flex justify-center items-center gap-2 px-5
        py-2 border font-montserrat text-lg leading-none bg-coral-red
         rounded-full text-white border-coral-red
         ${
            backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-slate-gray border-coral-red"
         }
         
         rounded-full ${fullWidth && 'w-48'}`}>
            {label}

            {iconUrl && <img src={iconUrl} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />}

            </button>
    )
}

export default Button