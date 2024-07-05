import {
  TitleLp,
  News,
  Articles,
  DivBox,
  DivForCont,
  NumberWrap,
  Empty,
  TextWrap,
  ImgWrap,
  Company,
  Occupation,
  SomeText,
  YearWrap,
} from './styled'

import tpt3 from '../imgs/5afae8c892664274779035.jpg'
import tpt4 from '../imgs2/designer.svg'
import tpt5 from '../imgs2/aplication.svg'
import tpt6 from '../imgs2/adviser.svg'

const articlessData = [
  {
    id: '1',
    imgsrc: tpt4,
    company: "IN FREELANCING COMPANY",
    occupation: "FRONT END DEVELOPER",
    someText: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet.",
    date: "2011 - 2012"
  },
  {
    id: '2',
    imgsrc: tpt5,
    company: "IN FREELANCING COMPANY",
    occupation: "Application Design",
    someText: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet.",
    date: "2011 - 2012"
  },
  {
    id: '3',
    imgsrc: tpt6,
    company: "IN FREELANCING COMPANY",
    occupation: "Personal Adviser",
    someText: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet.",
    date: "2011 - 2012"
  }

]



const SeventhSection = () =>(
  <section>
    <TitleLp>
      <News>NEWS & EVENT</News>
      <Articles>Latest Articles</Articles>
    </TitleLp>
    <>
      {articlessData.map(i => {
        const { id, imgsrc, company, occupation, someText, date } = i
        const condition = id === '2'

        return (
        <DivBox isReverce={ condition } >
          <DivForCont isReverce={ condition }>
            <TextWrap>
              <ImgWrap><img src = {imgsrc}/></ImgWrap>
              <Company>{company}</Company>
              <Occupation>{occupation}</Occupation>
              <SomeText>{someText}</SomeText>
              <a href="">READ MORE</a>
            </TextWrap>
          </DivForCont>
          <NumberWrap>
            <YearWrap>{date}</YearWrap>
          </NumberWrap>
          <Empty backgroundImg={tpt3} />
        </DivBox>
      )})}
    </>
  </section>
  );

export default SeventhSection;