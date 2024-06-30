import styled from 'styled-components'

export const Section2Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  font-family: 'Glacial Indifference-Bold', sans-serif;
  position: relative;
  margin-top: 90px;
  /* max-width: 1051px; */
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  line-height: 28px;

  *:not(:first-child) {
    margin: 7px 0;
  }

  @media (max-width: 630px) {
    margin: 30px;
  }
`
export const MyNameAgain = styled.h2`
  color: #222222;
`
export const Occupation2 = styled.span`
  color: #DAAE19;
`
export const Description = styled.p`
  width:334px ;
  text-align: justify;
  @media (max-width: 630px) {
    width: auto;
  }
`
export const HireMe = styled.button`
  background-color: #E93656;
  color:#FFFFFF;
  border: none;
  padding: 15px;
  width: 120px;
  transition-duration: 1s;

  &:hover {
    background-color: #DDDDDD;
    color: #222222;
  }
`

export const MiddleImgItself = styled.img`
  width: 300px;
  margin: 69px;

  @media (max-width: 630px) {
    margin: 20px;
    width: 250px;
  }
`
export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    margin-bottom: 50px;
  }
`
export const Item = styled.div`

`
export const Languages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Persentage = styled.span`
  color: #E93656;
  padding: 13px;
`

export const BarCont = styled.div`
  background-color: #F0F0F0;
  width: 228px;
`
export const MyBar = styled.div`
  height: 7px;
  width:100%;
  background-color: #E93656;
`
