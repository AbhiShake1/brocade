import React, {type FunctionComponent, useState} from 'react';
import {Chip, Progress, Rating} from "@mantine/core";
import ProductPreview from "~/components/ProductPreview";

interface RatingBarProps {
    rating: number
    reviewCount: number
}

function ReviewsSection() {
    return <div className='flex flex-col space-y-3 w-full mt-8'>
        <div className="text-3xl font-['Play'] leading-[15.6px] text-black relative">
            Reviews
        </div>
        <div
            className="shadow-[0px_1px_27px_0px_rgba(0,_0,_0,_0.05)] bg-white flex flex-col justify-start gap-2 relative w-full items-start pt-2 pb-3 px-1 rounded-lg">
            <div className="flex flex-row justify-start ml-2 gap-4 relative w-full items-start">
                <img
                    src="https://file.rendit.io/n/xvpQwmScwEIRNDbCHtnX.svg"
                    className="min-h-0 min-w-0 mb-2 relative w-8 shrink-0"
                />
                <div className="flex flex-col justify-start gap-3 relative w-1/3 h-8 items-center mt-2 mr-48">
                    <div className="text-xl font-['Play'] leading-[8px] text-[#222222] relative w-full h-[21.88%]">
                        Kim Shine
                    </div>
                    <div className="self-start flex flex-row justify-start ml-px gap-px relative w-20 items-center">
                        <img
                            src="https://file.rendit.io/n/wu2ytciZi0yTW5hywzSM.svg"
                            className="bg-[url(https://file.rendit.io/n/wu2ytciZi0yTW5hywzSM.svg)] bg-cover bg-50%_50% bg-blend-normal min-h-0 min-w-0 relative w-3 shrink-0"
                        />
                        <img
                            src="https://file.rendit.io/n/wu2ytciZi0yTW5hywzSM.svg"
                            className="bg-[url(https://file.rendit.io/n/wu2ytciZi0yTW5hywzSM.svg)] bg-cover bg-50%_50% bg-blend-normal min-h-0 min-w-0 relative w-3 shrink-0"
                        />
                        <img
                            src="https://file.rendit.io/n/wu2ytciZi0yTW5hywzSM.svg"
                            className="bg-[url(https://file.rendit.io/n/wu2ytciZi0yTW5hywzSM.svg)] bg-cover bg-50%_50% bg-blend-normal min-h-0 min-w-0 relative w-3 shrink-0"
                        />
                        <img
                            src="https://file.rendit.io/n/wu2ytciZi0yTW5hywzSM.svg"
                            className="bg-[url(https://file.rendit.io/n/wu2ytciZi0yTW5hywzSM.svg)] bg-cover bg-50%_50% bg-blend-normal min-h-0 min-w-0 mr-px relative w-3 shrink-0"
                        />
                        <img
                            src="https://file.rendit.io/n/Q7iO0nIRvqgpP8loA07O.svg"
                            className="bg-[url(https://file.rendit.io/n/Q7iO0nIRvqgpP8loA07O.svg)] bg-cover bg-50%_50% bg-blend-normal min-h-0 min-w-0 relative w-3 shrink-0"
                        />
                    </div>
                </div>
                <div
                    className="text-right text-xs font-['Circular_Std'] leading-[8px] text-[#9b9b9b] self-end mb-2 relative w-2/5 h-[14.63%]">
                    August 13, 2019
                </div>
            </div>
            <div className="flex flex-row justify-start gap-8 relative w-5/6 items-center mb-px ml-12">
                <div className="relative flex flex-col justify-start pb-20 w-5/6 items-center">
                    <div
                        className="w-[564px] h-24 overflow-hidden bg-white absolute top-8 left-0 flex flex-row justify-start gap-4 items-end pl-px pr-56">
                        <img
                            src="https://file.rendit.io/n/NG6JDbBImAcCyFPsgxEj.svg"
                            className="min-h-0 min-w-0 mb-[-14px] relative"
                        />
                        <img
                            src="https://file.rendit.io/n/EHZn8LNromIVPhYnokPw.svg"
                            className="min-h-0 min-w-0 mb-[-14px] relative"
                        />
                        <img
                            src="https://file.rendit.io/n/1L3jBLJlgVRhqtjTbDQ1.svg"
                            className="min-h-0 min-w-0 mb-[-14px] relative"
                        />
                    </div>
                    <div
                        className="text-xl font-['Play'] leading-[8px] text-black relative justify-start w-full h-full">
                        I{" "}
                        <div className="font-['Play'] leading-[8px] text-black contents">
                            loved the material and fit.
                        </div>
                    </div>
                </div>
                <button className="self-end flex flex-row justify-start mb-3 gap-1 relative w-16 shrink-0 items-center">
                    <div
                        className="text-xs font-['Circular_Std'] leading-[13.8px] text-[#9b9b9b] relative w-3/5 h-[58.13%]">
                        Helpful
                    </div>
                    <img
                        src="https://file.rendit.io/n/HTxC8UrGWFx2K0oJuQVH.svg"
                        className="min-h-0 min-w-0 relative w-6 shrink-0"
                    />
                </button>
            </div>
        </div>
    </div>
}

const RatingBar: FunctionComponent<RatingBarProps> = ({rating, reviewCount}) => {
    return <div className='flex flex-row space-x-4 items-center justify-end'>
        <Rating value={rating} count={rating} readOnly size='lg'/>
        <Progress value={reviewCount} className='h-3 bg-gray-400 w-36 bg-opacity-30' color='red'/>
        <div className="text-2xl font-['Circular_Std'] leading-[12.8px] text-[#4f4f4f] relative">
            {reviewCount}
        </div>
    </div>
}

function CustomerReviewsStarSection() {
    return <div className='flex flex-col space-y-8'>
        <div
            className="text-3xl font-['Play'] font-bold text-black mb-1 ml-3">
            Customer Reviews
        </div>
        <div className='flex flex-row space-x-8 items-center'>
            <div>
                <div
                    className="flex flex-row justify-start gap-px items-center ml-3 text-6xl font-['Circular_Std'] leading-[35.1px] text-[#222222] self-end relative mb-1 mr-12">
                    4.3
                </div>
                <div className="flex flex-row justify-start ml-3 gap-px relative items-center">
                    <div
                        className="whitespace-nowrap text-xl font-['Play'] text-[#9b9b9b] self-end mr-16 relative">
                        Average rating
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-start space-y-3'>
                <RatingBar rating={5} reviewCount={12}/>
                <RatingBar rating={4} reviewCount={5}/>
                <RatingBar rating={3} reviewCount={4}/>
                <RatingBar rating={2} reviewCount={2}/>
                <RatingBar rating={1} reviewCount={0}/>
            </div>
        </div>
    </div>;
}

const Index = () => {
    const [size, setSize] = useState('S');

    return (
        <div className="overflow-hidden flex flex-col gap-2 relative w-full items-start pt-6 pb-4 px-12">
            <div className="flex flex-row justify-start mb-16 gap-10 relative w-5/6 items-start">
                <ProductPreview imageUrls={[
                    'https://file.rendit.io/n/EIBZfPJtjuEStvRvNGqA.png',
                    'https://file.rendit.io/n/NETDsFkUmG8GUV8koPAH.png',
                    'https://file.rendit.io/n/d9EGT8btXEr5wo4mVWZJ.png',
                    'https://file.rendit.io/n/o52wnRDuFxw2cEhbfIDP.png',
                ]}/>
                <div className="self-end flex flex-col justify-start mb-3 gap-px relative w-2/5 h-[852px] items-start">
                    <div
                        className="whitespace-nowrap text-2xl font-['Montserrat'] tracking-[0.72] text-[#2e96ad] relative mb-4 ml-5">
                        Jersey & Jackets
                    </div>
                    <div
                        className="whitespace-nowrap text-3xl font-['Montserrat'] tracking-[0.96] text-black relative mb-4 ml-5">
                        Racing Pullover - 1
                    </div>
                    <div
                        className="text-sm font-['Montserrat'] font-bold tracking-[0.45] text-black self-end relative w-full h-[7.28%] mb-4 mr-2">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit orci tincidunt
                        sollicitudin sociis felis, feugiat et congue vivamus facilisis risus
                        parturient ac conubia ornare.
                    </div>
                    <div className="text-3xl font-['Montserrat'] tracking-[0.96] text-black relative mb-6 ml-5">
                        Rs.2500
                    </div>
                    <div className="text-2xl font-['Montserrat'] tracking-[0.72] text-black relative mb-px ml-5">
                        Size
                    </div>
                    <img
                        src="https://file.rendit.io/n/1fenC1C0hVX3RX9wXTJH.svg"
                        className="min-h-0 min-w-0 relative w-16 mb-3 ml-5"
                    />
                    <div className='flex flex-row space-x-4 mb-4'>
                        <Chip.Group value={size} onChange={value => setSize(value?.toString())}>
                            <Chip value="S" size='xl' variant='filled' radius='sm' color='dark'>S</Chip>
                            <Chip value="M" size='xl' variant='filled' radius='sm' color='dark'>M</Chip>
                            <Chip value="L" size='xl' variant='filled' radius='sm' color='dark'>L</Chip>
                            <Chip value="XL" size='xl' variant='filled' radius='sm' color='dark'>XL</Chip>
                            <Chip value="XXL" size='xl' variant='filled' radius='sm' color='dark'>XXL</Chip>
                        </Chip.Group>
                    </div>
                    <div className="text-2xl font-['Montserrat'] tracking-[0.72] text-black relative mb-px ml-5">
                        Color
                    </div>
                    <img
                        src="https://file.rendit.io/n/1fenC1C0hVX3RX9wXTJH.svg"
                        className="min-h-0 min-w-0 relative w-16 mb-4 ml-5"
                    />
                    <div className="flex flex-row justify-between gap-5 relative items-center mb-10 ml-5">
                        <img
                            src="https://file.rendit.io/n/yZFoZoRjoXY62JdOgxpW.svg"
                            className="min-h-0 min-w-0 relative w-10 shrink-0"
                        />
                        <img
                            src="https://file.rendit.io/n/a3bv43bkBbzk9aoEkezI.svg"
                            className="min-h-0 min-w-0 relative w-10 shrink-0"
                        />
                        <img
                            src="https://file.rendit.io/n/zP5bQ2eHrt7KALWhW5a4.svg"
                            className="min-h-0 min-w-0 relative w-10 shrink-0"
                        />
                    </div>
                    <div className="flex flex-row justify-start gap-3 relative items-center mb-10 ml-5">
                        <img
                            src="https://file.rendit.io/n/cL3XwIF6r2qRqEPz2yA7.svg"
                            className="min-h-0 min-w-0 relative w-8 shrink-0"
                        />
                        <div
                            className="whitespace-nowrap text-xl font-['Montserrat'] tracking-[0.66] text-black relative">
                            Check Availability in Store
                        </div>
                    </div>
                    <div className="flex flex-row justify-start gap-8 relative w-4/5 items-center mb-10 ml-5">
                        <div className="bg-[#07161d] flex flex-col justify-center relative w-3/4 h-16 items-center">
                            <div
                                className="whitespace-nowrap text-xl font-['Montserrat'] tracking-[0.66] text-white relative">
                                Add to Cart
                            </div>
                        </div>
                        <div
                            className="bg-[url(https://file.rendit.io/n/CJ8thw25penlgL12ERs4.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center relative w-16 shrink-0 h-16 items-center">
                            <img
                                src="https://file.rendit.io/n/N0nQK9U2lzdI6c3lLd2U.svg"
                                className="min-h-0 min-w-0 relative w-10"
                            />
                        </div>
                    </div>
                    <div
                        className="text-sm font-['Montserrat'] font-bold tracking-[0.45] text-black self-center justify-start relative w-full h-[17.96%]">
                        Size
                        {"  "}
                        <div className="text-sm font-['Montserrat'] font-bold tracking-[0.45] text-black contents">
                            {"                  "}
                            — The model is 189cm/6&apos;2&quot; and wears a size L/L
                            <br/>
                        </div>
                        <div className="text-sm font-['Montserrat'] font-bold tracking-[0.45] text-black contents">
                            Fit
                            {"   "}
                        </div>
                        <div className="text-sm font-['Montserrat'] font-bold tracking-[0.45] text-black contents">
                            {"                   "}—{"  "}
                            Relaxed fit
                            <br/>
                        </div>
                        <div className="text-sm font-['Montserrat'] font-bold tracking-[0.45] text-black contents">
                            Composition
                        </div>
                        <div className="text-sm font-['Montserrat'] font-bold tracking-[0.45] text-black contents">
                            {"    "}—{"  "}
                            Cotton 60%, Polyester 40%
                            <br/>
                        </div>
                        <div className="text-sm font-['Montserrat'] font-bold tracking-[0.45] text-black contents">
                            Art. No.
                        </div>
                        <div className="text-sm font-['Montserrat'] font-bold tracking-[0.45] text-black contents">
                            {"              "}—{"   "}
                            0970818009
                        </div>
                    </div>
                    <div
                        className="whitespace-nowrap text-sm font-['Montserrat'] font-bold tracking-[0.45] text-black ml-5 relative">
                        * Standard delivery in 2-7 days
                    </div>
                </div>
            </div>
            <CustomerReviewsStarSection/>
            <ReviewsSection/>
        </div>

    );
};

export default Index;