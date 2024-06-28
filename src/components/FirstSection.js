import { useRef } from 'react'
import SimpleSlider from './SimpleSlider'
import {
  StyledImg, PersonalNameInfo, NameOccupation, SliderImage, ButtonNext, SliderItem, Name
} from './styled'

import fb from './imgs/facebook.png'
import gh from './imgs/download.png'
import gg from './imgs/google+.png'
import ig from './imgs/download.jpg'

import photo1 from './imgs/tp1.png'
import photo2 from './imgs/tpt2.png'
import photo3 from './imgs/tpt3.png'


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
  console.log('FirstSection')

  return (
    // <PersonalNameInfo>
    //   <Slider ref={sliderRef} {...settings}>
    //     {slidesData.map(({ alt, src }) => (
    //       <SliderItem key={alt}>
    //         <li>
    //           <SliderImage src={src} alt={alt} />
    //         </li>
    //       </SliderItem>
    //     ))}
    //   </Slider>
    //   <NameOccupation>
    //     <Name>Hi, I' Am Nini Zambakhidze</Name>
    //     <h3 style={{ fontSize: '23px' }}>I am Front End Developer</h3>
    //     <div>
    //       {data?.map(({ href, src, alt }) => (
    //         // <a href={href} key={alt} target="_blank">
    //           <StyledImg src={src} alt={alt} key={alt} />
    //         // </a>
    //       ))}
    //     </div>
    //   </NameOccupation>
    // </PersonalNameInfo>
  )
}

export default FirstSection
