import styled from 'styled-components'

export const ArroundGrid = styled.div`
  margin: 10vw 23vw;
  @media(max-width: 650px) {
    margin: 10vw;
  }
`
export const FlexCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`
export const Box = styled.div`
  padding: 70px 40px;
  margin: 3px;
  width: 180px;
  background-color:#FAFAFA;
  font-family: 'Glacial Indifference-Bold', sans-serif;

  &:hover {
    background-color: #15263E;
    padding: 40px;

    > p {
      display: block
    }

    > h5 {
      color: white;
    }

    > img {
      display: none;
    }
    .img-cont {
      display: none;
    }
  } 
`
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const LabelBox = styled.h5`
  text-align: center;
  font-size: medium;
  color: #222222;
  font-weight: 400;
  padding-top: 20px;
`
export const DescriptionBox = styled.p`
   display: none;
`
