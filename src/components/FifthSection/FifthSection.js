import { useState } from 'react'
import {
  ContentWrap,
  ChangedContent,
  OverlayText,
  Ptext,
  IconWrap,
  Quote,
  QuoteItself,
  RectangleWrap,
  Rectangle,
  RectangleButton,
} from './styled'

import img1 from '../imgs2/d3.svg'
import img4 from '../imgs2/d4.svg'
import img5 from '../imgs2/d5.svg'
import img2 from '../imgs2/quote.svg'
import img3 from '../imgs2/clip.jpg'

const changedContentForCheckboxes = [
  { 
    id: '0',
    feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae ex officiis molestiae soluta harum',
    srcPerson: img1,
    role: 'Junior front end Developer',
    name: 'Sarah Sharashidze',
  },
  {
    id: '1',
    feedback: 'Esse repudiandae ex officiis molestiae soluta harum. Esse repudiandae ex officiis molestiae soluta harum. Esse repudiandae ex officiis molestiae soluta harum',
    srcPerson: img4,
    role: 'Middle front end Developer',
    name: 'Sarah Sharashidze'
  },
  {
    id: '2',
    feedback: 'Esse repudiandae ex officiis molestiae soluta harum. Esse repudiandae ex officiis molestiae soluta harum',
    srcPerson: img5,
    role: 'Senior front end Developer',
    name: 'Sarah Sharashidze'
  }
]

const ch = [
  {
    id: '0'
  },
  {
    id: '1'
  },
  {
    id: '2'
  }
]

const FifthSection = () => {
  const [ checkedState, setCheckedState ] = useState('0')

  const rechecking = id => {
    if(checkedState !== id) setCheckedState(id)
  }

  const filterdContent = changedContentForCheckboxes.filter(({ id }) => id === checkedState)
  
  return (
    <section>
      <ContentWrap backgroundImg={img3}>
        {filterdContent.map(({ feedback, srcPerson, role, name }) => (
           <ChangedContent>
            <OverlayText>{feedback}</OverlayText>
            <IconWrap>
              <img src={srcPerson} />
            </IconWrap>
            <Quote>
              <QuoteItself src={img2}/>
              <Ptext>{role}</Ptext>
              <h3>{name}</h3>
            </Quote>
          </ChangedContent>
        ))}
        <RectangleWrap>
          {ch.map(({ id }) => (
            <Rectangle>
              <RectangleButton 
                type="checkbox" 
                id={id}
                name="group1" 
                checked={id === checkedState}
                onClick={() => rechecking(id)}
              />
            </Rectangle>
          ))}
        </RectangleWrap>
      </ContentWrap>
    </section>
  );
}

export default FifthSection;