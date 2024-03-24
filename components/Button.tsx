import Image from "next/image";

type ButtonProps = {
    types: 'button' | 'sumbit';
    title: string;
    icon?: string;
    variant: string
    className?:string
}

const Button = ({types, title , icon ,variant}:ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${variant}`}
    type = "button"
    >
        {icon && <Image src={icon} alt={title} width={20} height={20}/>}
        <label className="bold-16 whitespace-nowrap">{title}</label></button>
  )
}

export default Button