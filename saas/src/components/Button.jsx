import clsx from "clsx"
import { Marker } from "./Marker"

const Button = ({icon, children, href, containerClassName, onClick, markFill}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker markFill={markFill} />
        </span>

        {icon && (<img src={icon} alt="circle" className="siez-10 mr-5 object-center z-10" />)}

        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
        <span className="glow-before glow-after" />
      </span>
    </>
  )

  return href ? (
    <a 
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",containerClassName,
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button 
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",containerClassName,
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  )
}

export default Button