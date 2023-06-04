import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => (
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
      <CloseIcon />
    </Icon>
    <SidebarWrapper>
      <SidebarMenu>
        <SidebarLink to="quienesSomos" onClick={toggle}>
          Whitepaper
        </SidebarLink>
        <SidebarLink to="Ecosystem" onClick={toggle}>
          Ecosystem
        </SidebarLink>
        <SidebarLink to="servicios" onClick={toggle}>
          Servicios
        </SidebarLink>
        <SidebarLink to="projects" onClick={toggle}>
          Foundation
        </SidebarLink>
        <SidebarLink to="tech" onClick={toggle}>
          Tech
        </SidebarLink>

      </SidebarMenu>
    </SidebarWrapper>
  </SidebarContainer>
);

export default Sidebar;
