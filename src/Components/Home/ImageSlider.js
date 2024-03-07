import React, { useEffect, useState } from 'react'
// import Img1 from "../../Images/Slider/img1.jpg"
// import Img2 from "../../Images/Slider/img2.jpg"
// import Img3 from "../../Images/Slider/img3.jpg"
// import Img4 from "../../Images/Slider/img4.jpg"
// import Img5 from "../../Images/Slider/img5.jpg"
// import Img6 from "../../Images/Slider/img6.jpg"

import Img1 from "../../Images/Slider/image3.webp"
import Img2 from "../../Images/Slider/image2.webp"
import Img3 from "../../Images/Slider/image4.webp"
import Img4 from "../../Images/Slider/image6.webp"
import Img5 from "../../Images/Slider/image5.webp"
import Img6 from "../../Images/Slider/image1.webp"

const ImageSlider = () => {

    const [imageIndex , setImageIndex] = useState(0)
  
    const Images = [Img1 , Img2 , Img3 , Img4 , Img5 , Img6]

    const updateImageIndex = (index)=>{
        setImageIndex(index)
    }

    let slideInterval

    useEffect(() => {
        slideInterval = setInterval(() => {
            const currentIndex = imageIndex < Images.length - 1 ? imageIndex + 1 : 0;
            updateImageIndex(currentIndex);
        }, 5000);

        // Clear interval when component unmounts or when needed
        return () => clearInterval(slideInterval);
    }, [imageIndex, Images]);

    const handleImageClick = (clickedIndex) => {
        clearInterval(slideInterval);
        updateImageIndex(clickedIndex);
    };

    return (
        <div className="pt-36">
            <div className="relative h-[20vh] sm:h-[30vh] lg:h-[40vh] xl:h-[50vh] 2xl:h-[60vh] bg-[#CFCFD1] w-full">
                <div className="w-[100%] h-[100%] flex overflow-hidden">
                    {
                    Images.map((image,index)=> <img className="object-fit cursor-pointer w-full h-full block flex-shrink-0 flex-grow-0 transition-[translate] duration-300 ease-in-out" style={{translate: `${-100*imageIndex}%`}} src={image}/>)
                    }
                </div>
            </div>
            <div className="w-full mx-auto flex justify-center">
                <div className="py-2 px-4 my-1 w-fit rounded-full flex flex-row justify-center cursor-pointer">
                {
                    Images.map((image,index)=> imageIndex === index ? <p className='scrollOptions p-[3px] mx-1 rounded-[50%] bg-[#56575D] scale-125' onClick={()=>handleImageClick(index)}></p>
                    : <p className='scrollOptions p-[3px] mx-1 rounded-[50%] bg-[#CFCFD1] hover:scale-125' onClick={()=>handleImageClick(index)}></p>)
                }
                </div>
            </div>
        </div>
    )
}

export default ImageSlider