import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testmonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {/* Review 1 */}
            <div className="testimonial py-4 px-3">
                <p>
                    The tour was incredibly well–organized, and our guide was very
                    knowledgeable. We covered all major attractions without feeling rushed.
                    Truly one of the best travel experiences I’ve had.
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">John Dawson</h6>
                        <p>Traveler</p>
                    </div>
                </div>
            </div>

            {/* Review 2 */}
            <div className="testimonial py-4 px-3">
                <p>
                    Amazing service! The team helped us customize the itinerary exactly
                    how we wanted. Hotels, transport, everything was handled smoothly.
                    Highly recommended for hassle-free travel.
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Lia Franklin</h6>
                        <p>Solo Traveler</p>
                    </div>
                </div>
            </div>

            {/* Review 3 */}
            <div className="testimonial py-4 px-3">
                <p>
                    The experience was fantastic! Our guide shared stories and local
                    insights that made the trip unforgettable. Would definitely book again
                    for my next vacation.
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Jimmy Carter</h6>
                        <p>Backpacker</p>
                    </div>
                </div>
            </div>

            {/* Review 4 */}
            <div className="testimonial py-4 px-3">
                <p>
                    Exceptional experience from start to finish. The sightseeing,
                    arrangements, and communication were spot-on. Perfect for families
                    and friend groups looking for a comfortable trip.
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Jelly Anderson</h6>
                        <p>Family Traveler</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Testmonial;
