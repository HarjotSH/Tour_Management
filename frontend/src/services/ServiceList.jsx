import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
  {
    imgUrl: weatherImg,
    title: 'Weather Forecasting',
    desc: "Get accurate weather updates for every destination so you can plan your trip with confidence.",
  },
  {
    imgUrl: guideImg,
    title: 'Expert Tour Guides',
    desc: "Travel with certified and experienced guides who ensure a safe, exciting, and informative journey.",
  },
  {
    imgUrl: customizationImg,
    title: 'Customizable Tours',
    desc: "Personalize your travel itinerary—choose destinations, activities, and schedules that suit you best.",
  },
]

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) =>
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
          <ServiceCard item={item} />
        </Col>
      )}
    </>
  )
}

export default ServiceList
  