import Slider from 'react-slick'

const SliderHome = () => {
    
    
    const settings = {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <div className="slider-container slider-home">
            <Slider {...settings}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcVSNvQkfj1MhHlTzKE_vXLu1vCvDnXPbJA&s" alt="" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcVSNvQkfj1MhHlTzKE_vXLu1vCvDnXPbJA&s" alt="" />
                </div>

            </Slider>
        </div>
    )
}

export default SliderHome