import React from 'react';
import type {NextComponentType} from "next";
import Image from "next/image";
import NavItem from "~/components/NavItem";
import {spotlight} from "@mantine/spotlight";

const Header: NextComponentType = () => {
    return (
        <header className='w-full flex flex-row items-center justify-between px-4 pt-9 pb-8'>
            <div className='flex flex-row space-x-4 items-center'>
                <Image
                    src='/logo.svg'
                    alt='' height={48} width={48}/>
                <h1 className='text-[36px] font-play text-black font-bold'>BROCADE OFFICIAL</h1>
            </div>
            <div className='flex flex-row items-center space-x-2'>
                <NavItem onClick={spotlight.open}>
                    <Image
                        src='/search.svg'
                        alt='' height={3} width={36}/>
                </NavItem>
                <NavItem href='favourites'>
                    <Image
                        src='/fav.svg'
                        alt='' height={36} width={36}/>
                </NavItem>
                <Image
                    src='/cart.svg'
                    alt='' height={36} width={36}/>
                <NavItem href='profile'>
                    <Image
                        src='/profile.svg'
                        alt='' height={36} width={36}/>
                </NavItem>
                <NavItem href=''>
                    <Image
                        src='/headphone.svg'
                        alt='' height={36} width={36}/>
                </NavItem>
                <NavItem>
                    <Image className='ml-4'
                        src='/menu.svg'
                        alt='' height={36} width={36}/>
                </NavItem>
            </div>
        </header>
    );
};

export default Header;