import React from "react"
import styled from "styled-components"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import { FaTimes } from "react-icons/fa"
import { Link } from "gatsby"
const DropDown = ({ toggle, isOpen }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <DropDownWrapper>
        <DropDownMenu>
          {menuData.map((item, idx) => (
            <DropDownLink to="item.link" key={idx}>
              {item.title}
            </DropDownLink>
          ))}
        </DropDownMenu>
        <BtnWrapper>
          <Button primary="true" round="true" to="/trips">
            Schedule a trip
          </Button>
        </BtnWrapper>
      </DropDownWrapper>
    </DropdownContainer>
  )
}

export default DropDown

const DropdownContainer = styled.aside`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

const CloseIcon = styled(FaTimes)`
  color: #fff;
`

const DropDownWrapper = styled.div`
  color: #fff;
`

const DropDownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);

  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`

const DropDownLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  color: #fff;

  &:hover {
    color: #f26a2e;
  }
`

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`
