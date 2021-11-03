import { NavbarMain, NavbarContainer, Logo, LinkItem, ListItems,MainLogo,MobileIcon } from './NavbarElements'
import LogoImage from '../../images/Logo.png'

const NavBar = ({toggle}) => {
    return (
        <>
            <NavbarMain>
                <NavbarContainer>
                    
                    <MainLogo to='/'>
                    <Logo src={LogoImage} alt="Rick and Morty">
                    </Logo>
                    </MainLogo>

                    
                     <MobileIcon onClick={toggle}>
                        <i class='bx bx-menu'></i>
                    </MobileIcon>

                    <ListItems>
                        <LinkItem to='/characters' >
                                Characters
                        </LinkItem>

                        <LinkItem to='/locations'>
                                Locations
                        </LinkItem>

                        <LinkItem to='/episodes'>
                                Episodes
                        </LinkItem>
                    </ListItems>
                </NavbarContainer>
            </NavbarMain>
        </>
    )
}

export default NavBar
