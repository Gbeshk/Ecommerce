import React from "react";
import Image1 from "../../../public/images/image-gallery-7.jpg";
import Image2 from "../../../public/images/image-gallery-8.jpg";
import Image3 from "../../../public/images/image-gallery-9.jpg";
import Image from "next/image";

function Headphone3Pictures() {
  return (
    <>
      <div className="flex max-w-[1110px] w-full mx-auto  mt-[156px] justify-between ">
        <div>
          <Image
            src={Image1}
            alt="image1"
            width={445}
            height={280}
            className="w-[445px] h-[280px] rounded-lg object-cover"
          />
          <Image
            src={Image2}
            alt="image2"
            width={445}
            height={280}
            className="w-[445px] h-[280px] rounded-lg object-cover mt-[32px]"
          />
        </div>
        <div>
          <Image
            src={Image3}
            alt="image3"
            width={635}
            height={592}
            className="w-[635px] h-[592px] rounded-lg object-cover "
          />
        </div>
      </div>
    </>
  );
}

export default Headphone3Pictures;
