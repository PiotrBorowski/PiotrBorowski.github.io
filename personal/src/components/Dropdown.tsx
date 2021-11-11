import React, { ReactChildren, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { MenuItem } from './Menu';


export interface DropdownItemProps {
    icon: ReactNode;
    title: string;
    onClick?: () => any;
}

export const DropdownItem = ({icon, title, onClick = () => {}}) => <li style={{listStyleType: 'none'}} onClick={onClick}><span>{icon}</span><span>{title}</span></li>


export interface DropdownProps {
    children: ReactChildren;
}

export const Dropdown = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef<HTMLDivElement>();

    const handleOutsideClick = event => {
        if(!ref?.current?.contains(event.target as any)) {
            setIsOpen(false);
        }
    }

    // to nie jest zgodne z WCAG
    // useEffect(() => {
    //     document.addEventListener('click', handleOutsideClick)

    //     return () => {document.removeEventListener('click', handleOutsideClick)}
    // }, []);

    const openedView = useMemo(() => (<ul style={{position: 'absolute', transform: "translate(-25%, 10px)"}}>{children}</ul>), [children])
    
    return (<div ref={ref}>
        <MenuItem onClick={() => {setIsOpen(!isOpen)}}>Dropdown</MenuItem>
        {isOpen && openedView}
    </div>)
}