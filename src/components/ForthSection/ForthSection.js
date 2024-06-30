import {
  ArroundGrid,
  FlexCont,
  Box,
  ImgContainer,
  LabelBox,
  DescriptionBox,
} from './styled'

import img1 from '../imgs2/design.svg'
import img2 from '../imgs2/service.svg'
import img3 from '../imgs2/ideas.svg'
import img4 from '../imgs2/pixel.svg'
import img5 from '../imgs2/ideas.svg'
import img6 from '../imgs2/analysis.svg'
import img7 from '../imgs2/chart.svg'
import img8 from '../imgs2/support.svg'

const boxesData = [
  {
    title: 'Front End Development',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: img1
  },
  {
    title: 'Best Service',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: img2
  },
  {
    title: 'Unique Ideas',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: img3
  },
  {
    title: 'Pixel Perfect',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: img4
  },
  {
    title: 'Unique Ideas',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: img5
  },
  {
    title: 'Design Analysis',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: img6
  },
  {
    title: 'Fully Managed',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: img7
  },
  {
    title: 'Helpful Support',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: img8
  },
]



const ForthSection = () => {

  return (
    <section>
      <ArroundGrid>
        <FlexCont>
          {boxesData.map(({title, description, src}) => (
            <Box>
              <ImgContainer>
                <img src={src} />
              </ImgContainer>
              <LabelBox>
                  {title}
              </LabelBox>
              <DescriptionBox>
                {description}
              </DescriptionBox>
            </Box>
          ))}
        </FlexCont>
      </ArroundGrid>
    </section>
  );
}

export default ForthSection;
