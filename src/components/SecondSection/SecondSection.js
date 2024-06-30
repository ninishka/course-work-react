
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
  { id: "myBar1", text: 'HTML', finalWidth: 90,  width: 10  },
  { id: "myBar2", text: 'CSS', finalWidth: 85,  width: 10 },
  { id: "myBar3", text: 'JS', finalWidth: 45,  width: 10  },
  { id: "myBar4", text: 'React', finalWidth: 20,  width: 10 },
]

const SecondSection = () => {
  // function move() {
  //   let width = 10;
  
  //   const observer = new IntersectionObserver(function(entries) {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         const id = setInterval(frame, 50); //რამდენად სწრაფად მუშაობს
  
  //         function frame() {
  //           const targetWidth = progressBarData.find(bar => bar?.id === entry?.target?.id)?.finalWidth || 20;
  
  //           if (width >= targetWidth) {
  //             clearInterval(id);
  //           } else {
  //             width++;
  //             progressBarData.forEach(bar => {
  //               if (bar.id === entry?.target?.id) {
  //                 entry.target.style.width = width + '%'; //დავამატე სიგანე
  //               }
  //             });
  //           }
  //         }
  //       }
  //     });
  //   });
  
  //   progressBarData.forEach(data => {
  //     observer.observe(document.getElementById(data.id)); // entries = document.getElementById(data.id)
  //   });
  // }

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
          <Item>
            <Languages>
              <p>{text}</p>
              <Persentage>{`(${finalWidth}%)`}</Persentage>
            </Languages>
            <BarCont>
              <MyBar id={id} />
            </BarCont>
          </Item>
        ))}
      </BarWrapper>
    </Section2Wrapper>
  );
}

export default SecondSection;
