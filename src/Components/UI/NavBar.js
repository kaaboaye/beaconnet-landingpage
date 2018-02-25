import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { I18n } from 'react-i18next'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
import Routes from "../../routes"

import LanguageImg from '../../Images/language.png'
import MenuImg from '../../Images/menu.png'

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return (
      <I18n ns="Landingpage">{(t, { i18n }) => (
        <div className="App">
          <Navbar expand="md">
            <NavbarBrand tag={Link} to="/">{t("Title")}</NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <img src={MenuImg} alt={t("Menu")}/>
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to={Routes.Home}>{t("Home")}</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={Link} to={Routes.About}>{t("About")}</NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <img src={LanguageImg} alt={t("Lang")} />
                  </DropdownToggle>
                  <DropdownMenu right>

                    <DropdownItem>
                      <NavLink tag={Link} to="#" onClick={()=>{i18n.changeLanguage('en')}}>{t("En")}</NavLink>
                    </DropdownItem>

                    <DropdownItem>
                      <NavLink tag={Link} to="#" onClick={()=>{i18n.changeLanguage('pl')}}>{t("Pl")}</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )}</I18n>
    )
  }
}

export default NavBar