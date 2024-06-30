import styled from 'styled-components'

export const ContactMeWrapper = styled.div`
  background-color: #131A36;
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
  font-family: 'Glacial Indifference-Bold', sans-serif;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
export const ContactMe = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px;
  justify-content: center;
`
export const RoundedBorder = styled.div`
  display: inline-block;
  border: 2px dashed white;
  overflow: hidden;
  padding: 24px;
  background-color: #131A36;
  border-radius: 50%;
  transition-duration: 2s;
  &:hover {
  background-color: #E93656;
  border: 2px solid transparent; /*რომ არ იქანაოს*/
 }
`
export const IconParrent = styled.div`
   position: relative;
   border-radius: 50%;
`
export const InfoIcons = styled.img`
  width: 35px;
  height: 35px;
  display: inline-block;
`
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  position: relative;  
`
export const InformationAddress = styled.span`
 color: #FFFFFF;
 font-size: 25px;
`
export const Address = styled.span`
  color: #DFDFDF;
  font-size: 13px;
  text-align: left;
  margin-top: 5px;
`