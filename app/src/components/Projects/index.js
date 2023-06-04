import React from 'react';

import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-5.svg';

import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElements';

const Projects = () => {
  return <ProjectsContainer id="projects">
 <ProjectsH1>Foundation</ProjectsH1>
<ProjectsWrapper>
<ProjectsCard>
<ProjectsIcon src={Icon1}/>
<ProjectsH2>Proyecto 1</ProjectsH2>
<ProjectsP>dolor sit amet, consectetur adipiscing elit. Morbi efficitur magna orci, a   laoreet mauris tincidunt eu.</ProjectsP>
</ProjectsCard>
<ProjectsCard>
<ProjectsIcon src={Icon2}/>
<ProjectsH2>Proyecto 2</ProjectsH2>
<ProjectsP>dolor sit amet, consectetur adipiscing elit. Morbi efficitur magna orci, a   laoreet mauris tincidunt eu.</ProjectsP>
</ProjectsCard>
<ProjectsCard>
<ProjectsIcon src={Icon3}/>
<ProjectsH2>Proyecto 3</ProjectsH2>
<ProjectsP>dolor sit amet, consectetur adipiscing elit. Morbi efficitur magna orci, a   laoreet mauris tincidunt eu.</ProjectsP>
</ProjectsCard>
</ProjectsWrapper>
  

  </ProjectsContainer>;
};

export default Projects;
