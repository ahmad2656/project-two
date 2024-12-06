import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import Container from "react-bootstrap/Container";
import "./Homefive.css";
import { Pagination } from "swiper/modules";

export default function Homefive() {
  return (
    <>
      <section className="sec-five">
        <Container>
          <Swiper
            id="swip"
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="c1.jpg" alt="" className="test-img" />
              <h5 className="c-names">Afa Rose</h5>
              <div className="rat-con">
                <FaStar id="ratings" />
                <FaStar id="ratings" />
                <FaStar id="ratings" />
                <FaStar id="ratings" />
              </div>
              <p className="test-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur delectus quos accusantium iste, beatae, alias sint
                impedit esse veniam, soluta sed mollitia unde molestias pariatur
                ipsam voluptatibus maiores debitis eligendi.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="c4.jpg" alt="" className="test-img" />
              <h5 className="c-names">John Doe</h5>
              <div className="rat-con">
                <FaStar id="ratings" />
                <FaStar id="ratings" />
                <FaStar id="ratings" />
                <FaStar id="ratings" />
              </div>

              <p className="test-para">
                Morem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur delectus quos accusantium iste, beatae, alias sint
                impedit esse veniam, soluta sed mollitia unde molestias pariatur
                ipsam voluptatibus maiores debitis eligendi.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="c3.jpg" alt="" className="test-img" />
              <h5 className="c-names">Fizzi Brandon</h5>
              <div className="rat-con">
                <FaStar id="ratings" />
                <FaStar id="ratings" />
                <FaStar id="ratings" />
                <FaStar id="ratings" />
              </div>

              <p className="test-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur delectus quos accusantium iste, beatae, alias sint
                impedit esse veniam, soluta sed mollitia unde molestias pariatur
                ipsam voluptatibus maiores debitis eligendi.
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <img src="c4.jpg" alt="" className="test-img" />
              <h5 className="c-names">John Doe</h5>
              <div className="rat-con">
                <FaStar id="ratings" />
                <FaStar id="ratings" />
                <FaStar id="ratings" />
                <FaStar id="ratings" />
              </div>

              <p className="test-para">
                Morem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur delectus quos accusantium iste, beatae, alias sint
                impedit esse veniam, soluta sed mollitia unde molestias pariatur
                ipsam voluptatibus maiores debitis eligendi.
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <img src="c1.jpg" alt="" className="test-img" />
              <h5 className="c-names">Afa Rose</h5>
              <div className="rat-con">
                <FaStar id="ratings" />
                <FaStar id="ratings" />
                <FaStar id="ratings" />
                <FaStar id="ratings" />
              </div>

              <p className="test-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur delectus quos accusantium iste, beatae, alias sint
                impedit esse veniam, soluta sed mollitia unde molestias pariatur
                ipsam voluptatibus maiores debitis eligendi.
              </p>
            </SwiperSlide>

            <SwiperSlide>
              <img src="c3.jpg" alt="" className="test-img" />
              <h5 className="c-names">Fizzi Brandon</h5>
              <div className="rat-con">
                <FaStar id="ratings" />
                <FaStar id="ratings" />
                <FaStar id="ratings" />
                <FaStar id="ratings" />
              </div>

              <p className="test-para">
                Morem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur delectus quos accusantium iste, beatae, alias sint
                impedit esse veniam, soluta sed mollitia unde molestias pariatur
                ipsam voluptatibus maiores debitis eligendi.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="c1.jpg" alt="" className="test-img" />
              <h5 className="c-names">Afa Rose</h5>
              <div className="rat-con">
                <FaStar id="ratings" />
                <FaStar id="ratings" />
                <FaStar id="ratings" />
                <FaStar id="ratings" />
              </div>

              <p className="test-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur delectus quos accusantium iste, beatae, alias sint
                impedit esse veniam, soluta sed mollitia unde molestias pariatur
                ipsam voluptatibus maiores debitis eligendi.
              </p>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
    </>
  );
}
