const Button = ({label,imgurl}) => {

  
  return (
    <button className="flex justify-center items-center
     px-7 py-4  border font-montserrat text-lg
     leading-none bg-coral-red rounded-full">
        {label}
       {imgurl && <img src={imgurl}
        className="ml-2 rounded-full w-5 h-5 "
        alt="" />}

    </button>
  )
}

export default Button