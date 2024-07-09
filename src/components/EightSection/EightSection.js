import {
  TitleLp,
  News,
  Articles,
  RosaTeam,
  KubiksWrap,
  TextWrapp,
  RosaTitle,
  RosaText,
} from './styled'

import img1 from '../imgs/mrs-vyvyan-drury-1907-1996-daughter-romayne-32241038.jpg'

const teamClients = [
  {
    id: '1',
    title: 'CLIENT 1',
    text: 'Lorm ipm dolr amt consect mag maiores.Ipsa dolor sit magnam maores.'
  },
  {
    id: '2',
    title: 'CLIENT 2',
    text: 'Lorm ipm dolr amt consect mag maiores.Ipsa dolor sit magnam maores.'
  },
  {
    id: '3',
    title: 'CLIENT 3',
    text: 'Lorm ipm dolr amt consect mag maiores.Ipsa dolor sit magnam maores.'
  },
  {
    id: '4',
    title: 'CLIENT 4',
    text: 'Lorm ipm dolr amt consect mag maiores.Ipsa dolor sit magnam maores.'
  },
  {
    id: '4',
    title: 'CLIENT 5',
    text: 'Lorm ipm dolr amt consect mag maiores.Ipsa dolor sit magnam maores.'
  },
]

const EightSection = () => {
  return (
   <section>
      <TitleLp>
        <News>NEWS & EVENT</News>
        <Articles>Rosa Team</Articles>
      </TitleLp>
      <RosaTeam>
        {teamClients.map(({title, text}) => (
          <KubiksWrap backgroundImg={img1}>
            <TextWrapp>
              <RosaTitle>{title}</RosaTitle>
              <RosaText>{text}</RosaText>
            </TextWrapp>
          </KubiksWrap>
        ))}
      </RosaTeam>
   </section>
  );
}

export default EightSection;