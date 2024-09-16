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
                    <img src="https://hackmd.io/_uploads/rk61MJUaR.png" alt="" />
                </div>
                <div>
                    <img src="https://hisense.com.co/wp-content/uploads/2023/10/Kv_Hi-Sale_02_web-1.jpg" alt="" />
                </div>

            </Slider>
        </div>
    )
}

export default SliderHome