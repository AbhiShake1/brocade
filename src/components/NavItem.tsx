import React, {type FunctionComponent} from 'react';
import {Button} from "@mantine/core";
import Link from "next/link";

interface Props {
    children: React.ReactNode
    href?: string
    onClick?: () => void
}

const NavItem: FunctionComponent<Props> = ({children, href, onClick}) => (
    href ? <Link href={href}><Button variant="subtle" size='sm' className='text-black'>{children}</Button></Link> :
        <Button variant="subtle" size='sm' className='text-black' onClick={onClick}>{children}</Button>
)

export default NavItem;