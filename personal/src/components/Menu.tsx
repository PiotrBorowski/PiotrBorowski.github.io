import React from 'react'
import styled from 'styled-components'
import {Dropdown, DropdownItem} from './Dropdown'

const MenuItem = styled.li`
 color: #03071E;
 list-style-type: none;
 font-family: rooney-web, serif;
 font-style: normal;
 font-weight: 600;
 text-align: center;
 font-size: 1.35rem;
 // potrzebne do before
 position: relative;
 width: 100%;

 &:hover {
     cursor: pointer;
     background-color: #DC2F02;

     transition: background-color 300ms linear;
 }
`
const MenuBackground = styled.ul`

 margin: 0;
 padding: 0;
 min-width: 100px;
 height: 5rem;
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 display: flex;
 flex: 1;
 flex-direction: row;
 justify-content: center;
 align-items: center;
`

export const Menu = () => {

    return (
        <MenuBackground>
            <MenuItem>Start</MenuItem>
            <MenuItem>LinkedIn</MenuItem>
            <MenuItem>GitHub</MenuItem>
            <Dropdown>
                <DropdownItem icon='x' title='Start'/>
                <DropdownItem icon='x' title='Start'/>
                <DropdownItem icon='x' title='Start'/>
            </Dropdown>
        </MenuBackground>)
    
}