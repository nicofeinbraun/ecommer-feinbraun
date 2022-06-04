import React from 'react'
import { Carousel } from "react-bootstrap"

const Home = () => {
return (
    <div>
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53l87Jl6MlyNhdAdATpiAaZVTSrTK8T_YRA&usqp=CAU"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQre6yjJCJ3ROAR7ZWXkc5PFvSzFo59y0pHBg&usqp=CAU"
                alt="Second slide"
                width = "250px"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0462/7814/8249/collections/BANER_REMERAS.jpg?v=1653607372"
                alt="Third slide"
                width = "250px"
                />
            </Carousel.Item>
        </Carousel>
    </div>
)
}

export default Home