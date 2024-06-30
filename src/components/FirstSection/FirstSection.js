import { useState } from 'react'
import {
  StyledImg, 
  PersonalNameInfo, 
  NameOccupation, 
  Slider, 
  SliderImage, 
  ButtonNext, 
  SliderUl, 
  Name, 
  StyledLi
} from './styled'

import fb from '../imgs/facebook.png'
import gh from '../imgs/download.png'
import gg from '../imgs/google+.png'
import ig from '../imgs/download.jpg'

import photo1 from '../imgs/tp1.png'
import photo2 from '../imgs/tpt2.png'
import photo3 from '../imgs/tpt3.png'


const data = [
  {
    href: 'https://www.facebook.com/nini.zambaxidze.7',
    src: fb,
    alt: 'fbicon',
  },
  {
    href: 'https://github.com/ninishka',
    src: gh,
    alt: 'giticon',
  },
  {
    href: 'mailto:zambakhidzenini.740@gmail.com',
    src: gg,
    alt: 'googleicon',
  },
  {
    href: 'https://www.instagram.com/morrisonsdaughter70/',
    src: ig,
    alt: 'instagramicon',
  }
]

const slidesData = [
  {
    alt: 'Title1',
    src: photo1
  },
  {
    alt: 'Title2',
    src: photo2
  },
  {
    alt: 'Title3',
    src: photo3
  },
]

const FirstSection = () => {
  const [ activeSlide, setActiveSlide ] = useState(0)

  const changeSlide = (movingForward = true) => {
    let newActiveSlide = activeSlide
    if (movingForward) {
      newActiveSlide += 1
      if (newActiveSlide >= slidesData.length) newActiveSlide = 0
    } else {
      newActiveSlide -= 1
      if (newActiveSlide < 0) newActiveSlide = slidesData.length - 1
    }

    setActiveSlide(newActiveSlide)
  }

  // setInterval(() => {
  //   console.log('setInterval')
  //   changeSlide()
  // }, 5000)

  return (
    <PersonalNameInfo>
      <Slider id='slider'>
        <ButtonNext onClick={() => changeSlide(false)}>{'<'}</ButtonNext>
        {slidesData.map(({ alt, src }, index) => (
          <SliderUl $isActive={index === activeSlide} key={alt} >
            <StyledLi>
              <SliderImage src={src} alt={alt} />
            </StyledLi>
          </SliderUl>
        ))}
        <ButtonNext onClick={() => changeSlide()}>{'>'}</ButtonNext>
      </Slider>
      <NameOccupation>
        <Name>Hi, I' Am Nini Zambakhidze</Name>
        <h3 style={{ fontSize: '23px' }}>I am Front End Developer</h3>
        <div>
          {data?.map(({ href, src, alt }) => (
            <a href={href} key={alt} target="_blank">
              <StyledImg src={src} alt={alt} />
            </a>
          ))}
        </div>
      </NameOccupation>
    </PersonalNameInfo>
  )
}

export default FirstSection
