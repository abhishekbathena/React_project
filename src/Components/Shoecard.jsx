import React from "react";

const Shoecard = ({ imgurl, changeBigShoeImage, bigshoeimg }) => {
  const handleclick = () => {
    if (bigshoeimg !== imgurl.bigShoe) {
      changeBigShoeImage(imgurl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl 
      ${bigshoeimg === imgurl.bigShoe ? "border-coral-red" : "border-transparent"}
    cursor-pointer max-sm:flex-1 `}
      onClick={handleclick}
     >
      <div
        className="flex justify-center items-center
        bg-card bg-center bg-cover sm:w-40
        sm:h-40 rounded-xl max-sm:p-4"
      >
        <img
          src={imgurl.thumbnail}
          alt={imgurl.bigShoe}
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Shoecard;
