import React from 'react'
import { styled } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Books = () => {
  // eslint-disable-next-line no-lone-blocks
  return (
    <BookSection>
      <StyledH2>Books</StyledH2>
      <Swiper
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 20
          }
        }}>
        <SwiperSlide>
          <a href="https://www.rabensjogren.se/bok/9789129738469/alskade-sport">
            <CarouselImg src="../img/alskadesportcover.png" alt="cover" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://voxbyopal.se/799/att-se-stjarnor/">
            <CarouselImg src="../img/Attsestjarnor_cover.png" alt="cover" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.bonnierforlagen.se/bocker/196637/manifestation/">
            <CarouselImg src="../img/manifestation.jpg" alt="cover" />
          </a>
        </SwiperSlide>
      </Swiper>
    </BookSection>
  )
}

const CarouselImg = styled.img`
  width: 400px;
`

const BookSection = styled.div`
  background-color: #f4f1fe;
  padding-top: 85px;
  padding-bottom: 85px;
`

const StyledH2 = styled.h2`
  font-size: 72px;
  margin-bottom: 6rem;
  color: #574283;
  text-align: center;
  }
`
const BookP = styled.p`
  text-align: center;
`

export default Books
