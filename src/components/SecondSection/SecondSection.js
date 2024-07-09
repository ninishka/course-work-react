
import {
  Section2Wrapper,
  Information,
  MyNameAgain,
  Occupation2,
  Description,
  HireMe,
  MiddleImgItself,
  BarWrapper,
  Item,
  Languages,
  Persentage,
  BarCont,
  MyBar
} from './styled'

import tpt3 from '../imgs/tpt3.png'

const progressBarData = [
  { id: "myBar1", text: 'HTML', finalWidth: 0.9,  width: 10  },
  { id: "myBar2", text: 'CSS', finalWidth: 0.85,  width: 10 },
  { id: "myBar3", text: 'JS', finalWidth: 0.45,  width: 10  },
  { id: "myBar4", text: 'React', finalWidth: 0.20,  width: 10 },
]

const SecondSection = () => {
  return (
    <Section2Wrapper>
      <Information>
        <MyNameAgain>Nini Zambakhidze</MyNameAgain>
        <Occupation2>Front End Developer</Occupation2>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam id nullt tenetur qui quas veniam porro fuga!
        </Description>
        <a href="">
          <HireMe>Hire Me</HireMe>
        </a>
      </Information>
      <div>
        <MiddleImgItself src={tpt3} alt="niniimg"/>
      </div>
      <BarWrapper>
        {progressBarData.map(({id, text, finalWidth, width}) => (
          <Item key={id}>
            <Languages>
              <p>{text}</p>
              <Persentage>{`(${finalWidth}%)`}</Persentage>
            </Languages>
            <BarCont>
              <progress id={id} value={finalWidth} />
            </BarCont>
          </Item>
        ))}
      </BarWrapper>
    </Section2Wrapper>
  );
}

export default SecondSection;
