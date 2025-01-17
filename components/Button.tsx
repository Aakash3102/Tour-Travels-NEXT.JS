import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: "btn_dark_green" | "btn_dark_green_outline" | "btn_white" | "btn_green" | "btn_white_text";
  onClick?: () => void; // Add onClick prop
}

const Button = ({ type, title, icon, variant, onClick }: ButtonProps) => {
  return (
    <button 
    
      className={`flexCenter gap-3 rounded-full border ${variant}`} 
      type={type}
      onClick={onClick} // Handle onClick prop
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
}

export default Button;
