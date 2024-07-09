import React, { useState } from 'react';
import {
  FooterUp,
  UnderLine,
  Text,
  FooterCont,
  WhiteRoca,
  RedDot,
  FooterText,
  IconsWrap,
  Icons,
} from './styled'

import tpt1 from '../imgs/icons8-facebook.svg'
import tpt2 from '../imgs/icons8-google-plus.svg'
import tpt3 from '../imgs/icons8-instagram.svg'
import tpt4 from '../imgs/icons8-pinterest.svg'
import tpt5 from '../imgs/icons8-twitter.svg'

const imgs = [
  {
    href: 'https://www.facebook.com/nini.zambaxidze.7',
    src: tpt1,
    alt: 'fbicon',
  },
  {
    href: 'https://www.facebook.com/nini.zambaxidze.7',
    src: tpt2,
    alt: 'googleicon',
  },
  {
    href: 'https://www.instagram.com/morrisonsdaughter70/',
    src: tpt3,
    alt: 'instaicon',
  },
  {
    href: 'https://www.pinterest.com/zambakhidzenini740/',
    src: tpt4,
    alt: 'pinteresticon',
  },
  {
    href: 'https://www.facebook.com/nini.zambaxidze.7',
    src: tpt5,
    alt: 'twittericon',
  },
]

const TenSection = () => {

  return (
    <footer>
      <FooterUp>
        <FooterCont>
          <div>
            <WhiteRoca>Roca <RedDot>.</RedDot> </WhiteRoca>
            <FooterText> Lorem ipsum dolor sit amet consectetur 
              adipiscing elit sed doeiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
            </FooterText>
            <IconsWrap>
              {imgs.map(({href, alt, src}) => (
                <a href={href} key={alt} target="_blank">
                  <Icons src={src}/>
                </a>
              ))}
           </IconsWrap>
          </div>
        </FooterCont>
      </FooterUp>
      <UnderLine>
        <h3>© All right reserved 2019. </h3>
        <Text>Rosa</Text>
        <div> - Creative Agency Website PSD Template.</div>
      </UnderLine>
    </footer>
  )

}

export default TenSection;