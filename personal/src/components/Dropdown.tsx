import React, { ReactChildren, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'


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

    const handleOutsideClick = useCallback(event => {
        if(!ref?.current?.contains(event.target as any)) {
            setIsOpen(false);
        }
    }, [ref])

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick)

        return () => {document.removeEventListener('click', handleOutsideClick)}
    }, []);

    const openedView = useMemo(() => (<ul style={{}}>{children}</ul>), [children])
    
    return (<div ref={ref}>
        <span style={{cursor: 'pointer'}} onClick={() => {setIsOpen(!isOpen)}}>Dropdown</span>
        {isOpen && openedView}
    </div>)
}