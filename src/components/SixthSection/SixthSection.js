import { useState } from 'react'
import {
  ItTitle,
  AroundFlex,
  NavBox,
  LatestProjects,
  ProjectBox,
  ContentWrapper,
  ImgProjCont,
  MonthAgo,
  TitleBox,
  NavBtnWrap,
  NavButton,
} from './styled'

import heart from "../imgs2/heart.svg"

const myProjectsData = [
  {
    id: '1',
    title: "middle",
    color: '#555555',
    href: "https://ninishka.github.io/middle/",
    date: "04.25.2024",
  },
  {
    id: '2',
    title: "Validations",
    color: "#848484",
    href: "https://ninishka.github.io/js-assignment-18/",
    date: "05.20.2024",
  },
  {
    id: '3',
    title: "Groupwork",
    color: '#555555',
    href: "https://ninishka.github.io/groupwork2/",
    date: "04.11.2024",

  },
  {
    id: '4',
    title: "Grid",
    color: '#848484',
    href: "https://ninishka.github.io/assignment-10/",
    date: "04.04.2024",

  },
  {
    id: '5',
    title: "mozilla",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox",
    color: '#555555',
    date: "04.19.2024",
  },
  {
    id: '6',
    title: "mozila2",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox",
    color: '#848484',
    date: "04.19.2024",

  },
]

const SixthSection = () => {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [activeAll, setActiveAll] = useState(null);

  const getMonthsBetweenDates = (startDate, endDate) => {
    const monthsDifference = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24 * 30));
    return monthsDifference || 'less than 1'; // IF 0 MONTS = RETURN 'less than 1'
  }

  const navMenuArray = [{title: 'All', id: '0'}, ...myProjectsData]

  const toggleVisibility = (projectId) => {
    if (projectId === '0') setActiveAll(true)
    else setActiveAll(false)

    if (activeProjectId === projectId) {
      setActiveProjectId(null); 
    } else {
      setActiveProjectId(projectId);
    }
  };

  return (
    <section>
      <ItTitle>Latest Projects</ItTitle> 
      <AroundFlex>
      <NavBox>
        {navMenuArray.map(({ id, title }) => (
          <NavBtnWrap key={title} onClick={() => toggleVisibility(id)}>
            <NavButton>{title}</NavButton>
          </NavBtnWrap>
        ))}
        </NavBox>
        <LatestProjects>
          {myProjectsData.map(({ id,  title, href, color, date }) => {
            const startDate = new Date(date); // creating date auto format - date of project
            const endDate = new Date(); // create current date/time
            const monthsBetween = getMonthsBetweenDates(startDate, endDate);
            const ago = `${monthsBetween} monts ago`

            return (
            <ProjectBox colorBg={color}>
              <ContentWrapper visibilityValue={activeAll || activeProjectId === id}>
                <ImgProjCont>
                  <img src={heart}/>  
                </ImgProjCont>
                <MonthAgo>{ago}</MonthAgo>
                <TitleBox href={href} target='blank'>{title}</TitleBox>
              </ContentWrapper> 
            </ProjectBox>
          )})}
        </LatestProjects>
      </AroundFlex>
    </section>
  )
}

export default SixthSection
