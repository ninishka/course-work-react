import {
  ContactMeWrapper,
  ContactMe,
  RoundedBorder,
  IconParrent,
  InfoIcons,
  InfoWrap,
  InformationAddress,
  Address,
} from './styled'

import img1 from '../imgs2/1.svg'
import img2 from '../imgs2/2.svg'
import img3 from '../imgs2/3.svg'


const contactMe = [
  {
    src: img1,
    title: 'Phone Number',
    description: '599702906 that is work number',
  },
  {
    src: img2,
    title: 'User Address',
    description: 'Georgia, Tbilisi Sharashidze 2/4',
  },
  {
    src: img3,
    title: 'Email Address',
    description: 'zambakhidzenini.740@gmail.com',
  }
]

const ThirdSection = () => {

  return (
    <div>
      <ContactMeWrapper>
        {contactMe.map(({ src, title, description }) => (
          <ContactMe key={title}>
            <RoundedBorder>
              <IconParrent>
                <InfoIcons src={src} alt={title} />
              </IconParrent>
            </RoundedBorder>
            <InfoWrap>
              <InformationAddress>{title}</InformationAddress>
              <Address>{description}</Address>
            </InfoWrap>
          </ContactMe>
        ))}
      </ContactMeWrapper>
    </div>
  );
}

export default ThirdSection;
