import styled from 'styled-components'

export const TitleLp = styled.div`
  text-align: center;
  margin: 60px 0 35px;
  font-family: 'Glacial Indifference-Bold', sans-serif;
`
export const News = styled.p`
  color: #2ED279;
  font-size: 8px;
`
export const Articles = styled.h1`
  color: #2E2E2E;
  font-size: 45px;
`
export const DivBox = styled.div`
  display: flex;
  font-family: 'Glacial Indifference-Bold', sans-serif;
  flex-direction: ${({ isReverce }) => isReverce && 'row-reverse'};
`
export const DivForCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 60%;
  align-items: center;
  background-color: #FAFAFA;
  margin-bottom: 79px;
  min-width: ${({ isReverce }) => isReverce && '40%'};

`
export const NumberWrap = styled.div`
  background-color: #15263E;
  width: 100px;
  color: red;
`
export const YearWrap = styled.h2`
  transform: rotate(271deg); 
  font-size: 20px;
  width: max-content;
  margin-top: 155px;
`

export const Empty = styled.div`
  background-image: ${(prop) => `url(${prop.backgroundImg})`};
  width: 1300px;
`
export const TextWrap = styled.div`
max-width: 400px;
`
export const ImgWrap = styled.div`
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  background-color: #FFFFFF;
  padding: 10px;
  max-width: max-content;
  transition-duration: 2s;
  &:hover {
  background-color: #E93656;
}
`
export const Company = styled.h6`
  color: #888888;
  letter-spacing: 2px;
  font-weight: 100;

`
export const Occupation = styled.h2`
   letter-spacing: 1px;
`
export const SomeText = styled.p`
  letter-spacing: 2px;
  line-height: 26px;
  color: #494949;  
`
