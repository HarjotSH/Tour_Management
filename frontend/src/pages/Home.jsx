import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import experienceImg from "../assets/images/experience.png";
import worldImg from "../assets/images/world.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../Component/Featured-tour/FeaturedTourList";
import MasonryImagesGallery from "../Component/Image-gallery/MasonryImagesGallery";
import Testmonial from "../Component/Testmonial/Testmonial";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to{" "}
                  <span className="highlight">unforgettable experiences</span>
                </h1>
                <p>
                  Discover breathtaking destinations, explore iconic landmarks,
                  and create meaningful memories with every journey. Whether
                  you're seeking adventure, cultural exploration, or a peaceful
                  getaway, we help you find the perfect tour tailored to your
                  travel dreams.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            {/* Search bar */}
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* What we serve */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What We Serve</h5>
              <h2 className="services__title">
                Exceptional travel services for every explorer
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* Featured tours */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle Subtitle={"Explore"} />
              <h2 className="featured__tour-title">
                Discover our featured tours
              </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* Experience section */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle Subtitle={"Experience"} />
                <h2>
                  With years of expertise <br /> we craft your perfect journey
                </h2>
                <p>
                  Our experienced team brings together the best destinations,
                  trusted guides, and seamless planning to ensure every trip
                  becomes a cherished memory. Travel confidently with curated
                  experiences designed just for you.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Happy travellers</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years of expertise</h6>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Explore moments from our travellers’ journeys
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section>
        <Container>
          <Col lg="12">
            <Subtitle Subtitle={"Fans Love"} />
            <h2 className="testimonial__title">
              What our travellers say about us
            </h2>
          </Col>
          <Col lg="12">
            <Testmonial />
          </Col>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Home;
