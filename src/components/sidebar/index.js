import React from 'react'
import {SideBarContainer,Icon,SideWrapper,SidebarMenu,SidebarLink} from './SidebarElements'

const Sidebar = ({toggle,isOpen}) => {
    return (
        <>
            <SideBarContainer isOpen={isOpen}>
                <Icon onClick={toggle}>
                   <i class='bx bx-x'></i>
                </Icon>

                <SideWrapper >
                    <SidebarMenu>
                        
                        <SidebarLink onClick={toggle} to='/characters'>Characters</SidebarLink>

                        <SidebarLink onClick={toggle} to='/locations'>Locations</SidebarLink>

                        <SidebarLink onClick={toggle} to='/episodes'>Episodes</SidebarLink>
                    </SidebarMenu>
                </SideWrapper>

            </SideBarContainer>
        </>
    )
}

export default Sidebar

