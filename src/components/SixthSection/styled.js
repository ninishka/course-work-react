import styled from 'styled-components'

export const ItTitle = styled.h2`
  text-align: center;
  margin-top: 150px;
  font-size: 35px;
  font-family: 'Glacial Indifference-Bold', sans-serif;
`
export const AroundFlex = styled.div`
  margin: 3vw 25vw;
  display: flex;
  flex-direction: row;
  @media(max-width: 632px) {
    flex-direction: column;
  }
`
export const NavBox = styled.div`
  display: flex;
  flex-direction: column;
`
export const LatestProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative
`

const reusedStyles = `
  padding: 27px 0;
  margin: -1px;
  width: 180px;
  font-family: 'Glacial Indifference-Bold', sans-serif;
  font-weight: lighter;
  display: flex;
  flex-direction: column;
  align-items: center;  
`
export const ProjectBox = styled.div`
  ${reusedStyles}

  /* background-color: ${props => props.colorBg}; same */
  background-color: ${({ colorBg }) => colorBg}; 
`

export const ContentWrapper = styled.div`
  ${reusedStyles}
  visibility: ${({ visibilityValue }) => visibilityValue ? 'visible' : 'hidden'};
`

export const ImgProjCont = styled.div`
  border: 2px solid #E93656;
  border-radius: 50%;
  padding: 9px 12px;
  margin: 20px;
`

export const MonthAgo = styled.h5`
  color: #DDDDDD;
  font-size: 8px;
`
export const TitleBox = styled.a`
  text-decoration: none;
  color: #FFFFFF;
  font-size: 20px;
  margin: 20px;
`

export const NavBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
`
export const NavButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 6px 32px;
  background-color: #15263E;
  color: white;
  text-align: left;
`