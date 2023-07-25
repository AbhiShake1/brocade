import React from 'react';
import type {NextComponentType} from "next";
import Image from "next/image";
import NavItem from "~/components/NavItem";
import {modals} from "@mantine/modals";
import FilterModal from "~/components/modals/FilterModal";
import {useRouter} from "next/router";
import {UserButton} from "@clerk/nextjs";

const Header: NextComponentType = () => {
    const {push} = useRouter()
    return (
        <header className='w-full flex flex-row items-center justify-between px-4 pt-9 pb-8'>
            <button onClick={() => void push('/')}>
                <div className='flex flex-row space-x-4 items-center'>
                    <Image
                        src='/logo.svg'
                        alt='' height={48} width={48}/>
                    <h1 className='text-[36px] font-play text-black font-bold'>BROCADE OFFICIAL</h1>
                </div>
            </button>
            <div className='flex flex-row items-center space-x-2'>
                <NavItem onClick={() => modals.open({
                    children: <FilterModal/>
                })}>
                    <Image
                        src='/search.svg'
                        alt='' height={3} width={36}/>
                </NavItem>
                <NavItem href='/favourites'>
                    <Image
                        src='/fav.svg'
                        alt='' height={36} width={36}/>
                </NavItem>
                <NavItem href='/cart'>
                    <Image
                        src='/cart.svg'
                        alt='' height={36} width={36}/>
                </NavItem>
                <div className='scale-125 px-6'><UserButton/></div>
            </div>
        </header>
    );
};

export default Header;