import styled from 'styled-components'

export const StyledImg = styled.img`
  width: 25px;
  border-radius: 50%;
  margin: 25px 9px;
`

export const PersonalNameInfo = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 0 79px 0 79px ;

  @media (max-width: 850px) {
    flex-direction: column;
  }

  @media (max-width: 630px) {
    padding: 0 20px 20px 20px;
  }
`

export const NameOccupation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 17vw;
  line-height: 63px;
  margin-bottom: 0;
  
  @media (max-width: 1283px) {
    margin-left: 3vw;
    line-height: 40px;
  }
`

export const Slider = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const SliderImage = styled.img`
  max-height: 1000px;
  @media (max-width: 1000px) {
    width: 300px;
    margin-top: 50px;
  }
`

export const ButtonNext = styled.button`
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  border: 1.5px solid rgb(236, 239, 241);
  box-shadow: rgb(212, 215, 217) 0px 4px 12px;
  cursor: pointer;

  &:hover {
    background-color: #DDDDDD;
  }
`

export const SliderUl = styled.ul`
  display: ${props => props.$isActive ? 'block' : 'none'}    
`

export const StyledLi = styled.li`
  list-style-type: none;
`

export const Name = styled.h2`
  font-size: 51px;
  @media (max-width: 1283px) {
    font-size: 40px;
  }
  @media (max-width: 759px) {
    font-size: 30px;
  }
`
