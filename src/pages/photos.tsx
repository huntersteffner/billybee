import Carousel from "@/components/Carousel"

import Image from "next/image"
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from "react"



const Photos = () => {

    let data = [
        {
        id: 1,
        imgSrc: require('../assets/img/01carousel.jpeg'),
    },
        {
        id: 2,
        imgSrc: require('../assets/img/02carousel.jpg'),
    },
        {
        id: 3,
        imgSrc: require('../assets/img/03carousel.jpg'),
    },
        {
        id: 4,
        imgSrc: require('../assets/img/04carousel.jpg'),
    },
        {
        id: 5,
        imgSrc: require('../assets/img/05carousel.jpg'),
    },
        {
        id: 6,
        imgSrc: require('../assets/img/06carousel.jpg'),
    },
        {
        id: 7,
        imgSrc: require('../assets/img/07carousel.jpg'),
    },
        {
        id: 8,
        imgSrc: require('../assets/img/08carousel.jpg'),
    },
        {
        id: 9,
        imgSrc: require('../assets/img/09carousel.jpg'),
    },
        {
        id: 10,
        imgSrc: require('../assets/img/10carousel.jpg'),
    },
        {
        id: 11,
        imgSrc: require('../assets/img/11carousel.jpg'),
    },
        {
        id: 12,
        imgSrc: require('../assets/img/12carousel.jpg'),
    },
        {
        id: 13,
        imgSrc: require('../assets/img/13carousel.jpg'),
    },
        {
        id: 14,
        imgSrc: require('../assets/img/14carousel.jpg'),
    },
        {
        id: 15,
        imgSrc: require('../assets/img/15carousel.jpg'),
    },
]
const [model, setModel] = useState(false)
const [tempImgSrc, setTempImgSrc] = useState('')
const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModel(true)
}
    return (
        <>
            <Carousel/>
            <div className={model? "model open": "model"}>
                <Image alt="test" src={tempImgSrc}/>
                <AiOutlineClose onClick={() => setModel(false)}/>
            </div>
            <div className="gallery">
                {data.map((item,index) => {
                    return (
                        <div className="pics" onClick={()=> getImg(item.imgSrc)} key={index}>
                            <Image className="w-full" src={item.imgSrc} alt="test"/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Photos