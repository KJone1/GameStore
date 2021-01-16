import { List, ListItem, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import {
  BsFillInfoCircleFill,
  BsFillHouseFill,
  BsBagFill,
} from "react-icons/bs";

import styled from "@emotion/styled";

export default function SideNavbar() {
  return (
    <Flex
      position="fixed"
      left="30px"
      top="25vh"
      p={4}
      h="25vh"
      alignItems="center"
    >
      <List spacing={10}>
        <ListItem>
          <StyledNavLink to="/" exact activeClassName="activeLink">
            <BsFillHouseFill className="Icon" />
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/page/1" activeClassName="activeLink">
            <BsBagFill className="Icon" />
          </StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink exact activeClassName="activeLink" to="/info">
            <BsFillInfoCircleFill className="Icon" />
          </StyledNavLink>
        </ListItem>
      </List>
    </Flex>
  );
}

//////////////////////

const StyledNavLink = styled(NavLink)`
  color: grey;
  &.activeLink {
    color: white;
    .Icon {
      transform: scale(1.2);
    }
  }
`;
