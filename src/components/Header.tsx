import React from 'react';
import type {NextComponentType} from "next";
import Image from "next/image";
import {
    IconHeadphonesFilled,
    IconHeartFilled,
    IconMenu2,
    IconSearch,
    IconShoppingCart,
    IconUser
} from "@tabler/icons-react";
import NavItem from "~/components/NavItem";
import {spotlight} from "@mantine/spotlight";

const Header: NextComponentType = () => {
    return (
        <header className='w-full flex flex-row items-center justify-between px-4 pt-9 pb-8'>
            <div className='flex flex-row space-x-4 items-center'>
                <Image
                    src='/logo.svg'
                     alt='' height={64} width={64}/>
                <h1 className='text-[64px] font-play text-black font-bold'>BROCADE OFFICIAL</h1>
            </div>
            <div className='flex flex-row items-center'>
                <NavItem onClick={spotlight.open}><IconSearch className='scale-125'/></NavItem>
                <NavItem href='favourites'><IconHeartFilled className='scale-125'/></NavItem>
                <NavItem href='cart'><IconShoppingCart className='scale-125'/></NavItem>
                <NavItem href='profile'><IconUser className='scale-125'/></NavItem>
                <NavItem href=''><IconHeadphonesFilled className='scale-125'/></NavItem>
                <NavItem><IconMenu2 className='scale-125'/></NavItem>
            </div>
        </header>
    );
};

export default Header;