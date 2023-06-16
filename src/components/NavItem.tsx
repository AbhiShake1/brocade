import React, {type FunctionComponent} from 'react';
import {Button} from "@mantine/core";
import Link from "next/link";

interface Props {
    children: React.ReactNode
    href: string
}

const NavItem: FunctionComponent<Props> = ({children, href}) => (
    <Link href={href}><Button variant="subtle" size='lg' className='text-black'>{children}</Button></Link>
);

export default NavItem;