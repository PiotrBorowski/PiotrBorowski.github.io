import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import {Dropdown, DropdownItem} from './Dropdown'

export const MenuItem = styled.li`
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

    const [state, setState] = useState({ input1: '', input2: ''} as any);

    const handleChange = useCallback(e => {
        e.preventDefault();
        setState(s => ({...s, [e.target.name]: e.target.value}));
    }, [])

    return (
        <MenuBackground>
            <MenuItem>Start</MenuItem>
             <Dropdown>
                <DropdownItem icon='x' title='Start'/>
                <DropdownItem icon='x' title='Start'/>
                <DropdownItem icon='x' title='Start'/>
                <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={e => {e.preventDefault(); console.log(e)}}>
                    <input name="input1" value={state.input1 || ''} onChange={handleChange}/>
                    <input name="input2" value={state.input2 || ''} onChange={handleChange}/>
                    <button type='submit'>Submit</button>
                </form>
                <li>{JSON.stringify(state)}</li>
            </Dropdown>
            <MenuItem>LinkedIn</MenuItem>
            <MenuItem>GitHub</MenuItem>
           
        </MenuBackground>)
    
}