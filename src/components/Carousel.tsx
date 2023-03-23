import { useState } from 'react'
import CarouselItem from './CarouselItem'

const Carousel = () => {

    // https://github.com/harakisgeorge/carouselreact
  const [activeIndex, setActiveIndex] = useState(0)
  const items = [
    {
      description: 'blah blah',
      image: require('../assets/img/01carousel.jpeg'),
    },
    {
      description: 'blah blah',
      image: require('../assets/img/02carousel.jpg'),
    },
    {
      description: 'blah blah',
      image: require('../assets/img/03carousel.jpg'),
    },
    {
      description: 'blah blah',
      image: require('../assets/img/04carousel.jpg'),
    },
    {
      description: 'blah blah',
      image: require('../assets/img/05carousel.jpg'),
    },
  ]

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1
    }

    setActiveIndex(newIndex)
  }
  return (
    <>
      <div className="carousel mx-auto">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => {
            return (
              <CarouselItem
                key={index}
                image={item.image}
                description={item.description}
                width={'100%'}
              />
            )
          })}
        </div>
        <div className="carousel-buttons">
          <div
            onClick={() => {
              updateIndex(activeIndex - 1)
            }}
            className="button-arrow"
          >
            <button>❮</button>
          </div>
          <div className="indicators">
            {items.map((item, index) => {
              return (
                <button onClick={() => {
                    updateIndex(index)
                  }} key={index} className="indicator-buttons">
                  .
                </button>
              )
            })}
          </div>
          <div
            onClick={() => {
              updateIndex(activeIndex + 1)
            }}
            className="button-arrow"
          >
            <button>❯</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel
