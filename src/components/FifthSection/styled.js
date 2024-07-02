import styled from 'styled-components'


export const ContentWrap = styled.div`
  background-image: ${({ backgroundImg }) => `url(${backgroundImg})`};
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;   
  color: #FFFFFF;

  @media (max-width: 830px) {
    flex-direction: column;
    height: auto;
  }
`

export const ChangedContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;

  @media (max-width: 830px) {
    flex-direction: column;
    height: auto;
  }
`

export const OverlayText = styled.div`
  max-width: 345px;
  margin-right: 20px;
  font-size: 11px;
  font-family: 'Roboto light', sans-serif;
  letter-spacing: 1px;
  line-height: 20px;
  color:#DDDDDD;
`
export const IconWrap = styled.div`
  display: inline-block;
  border: 2px dashed white;
  overflow: hidden;
  background-color: #131A36;
  border-radius: 50%;
  transition-duration: 1s;
  padding: 10px;
  &:hover{
    background-color: #E93656;
    border: 2px solid transparent;
  }
`
export const Quote = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  line-height: 27px;
  font-family: 'Glacial Indifference-Bold', sans-serif;
`
export const QuoteItself = styled.img`
    width: 32px;
    margin-bottom: 25px;
`
export const Ptext = styled.p`
 color: #E93656;
 font-size: 13px;
`
export const RectangleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 87px;

  @media (max-width: 830px) {
    flex-direction: row;
  }
`
export const Rectangle = styled.div`
  width: 13px;
  height: 13px;
  background-color: transparent;
  border: 2px solid white;
  margin: 8px;
  position: relative;
`
export const RectangleButton = styled.input`
  border: none;
  cursor: pointer;
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: black;
  appearance: none;
  border: none;
  position: absolute;
  left: -6px;
  top: -4px;

  &:checked {
    border: 3px solid red ;
  }
`

