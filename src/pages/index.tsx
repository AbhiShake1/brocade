import Head from "next/head";
import {api} from "~/utils/api";
import {Carousel} from "@mantine/carousel";
import {Alert, Button, Checkbox, Grid, Image, TextInput, Timeline} from "@mantine/core";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";
import ProductItem from "~/components/ProductItem";
import type {FunctionComponent} from "react";
import ShopByCategoryItem from "~/components/ShopByCategoryItem";
import ShopTheLookItem from "~/components/ShopTheLookItem";
import { useRef, useState } from 'react';
import { createStyles, NumberInput, type NumberInputHandlers, ActionIcon, rem } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons-react';

const images: string[] = [
    'https://www.promostyl.com/wp-content/uploads/2019/06/fenty-brand-campaign-002-without-logo-url-glen-luchford-1558621091.jpg',
    'https://www.promostyl.com/wp-content/uploads/2019/06/fenty-brand-campaign-002-without-logo-url-glen-luchford-1558621091.jpg',
    'https://www.promostyl.com/wp-content/uploads/2019/06/fenty-brand-campaign-002-without-logo-url-glen-luchford-1558621091.jpg',
    'https://www.promostyl.com/wp-content/uploads/2019/06/fenty-brand-campaign-002-without-logo-url-glen-luchford-1558621091.jpg',
];

const ShopByCategorySection: FunctionComponent = () => {
    return <Grid className='px-36'>
        <Grid.Col span={4}>
            <ShopByCategoryItem/>
        </Grid.Col>
        <Grid.Col span={4}>
            <ShopByCategoryItem/>
        </Grid.Col>
        <Grid.Col span={4}>
            <ShopByCategoryItem/>
        </Grid.Col>
    </Grid>
}

const ShopTheLookSection: FunctionComponent = () => {
    return <Grid className='px-36'>
        <Grid.Col span={4}>
            <ShopTheLookItem/>
        </Grid.Col>
        <Grid.Col span={4}>
            <ShopTheLookItem/>
        </Grid.Col>
        <Grid.Col span={4}>
            <ShopTheLookItem/>
        </Grid.Col>
    </Grid>
}

const SubscribeSection: FunctionComponent = () => {
    return <div
        className='pt-2 pb-8 flex-col space-y-2 justify-center items-center bg-gradient-to-r from-pink-950 via-gray-800 to-pink-950'>
        <div className="text-center text-5xl font-['Montserrat'] font-bold text-white self-start">
            Subscribe
        </div>
        <div className="flex flex-row gap-8 relative w-full justify-center items-center">
            <TextInput
                placeholder="Name"
                size='xl'
                withAsterisk
                required
            />
            <TextInput
                placeholder="E-Mail"
                size='xl'
                withAsterisk
                required
            />
            <button
                className="bg-[#0a232d] flex flex-col justify-center relative h-16 items-center px-20 text-center text-2xl font-['Montserrat'] font-semibold text-white hover:bg-white hover:text-black transition-colors ease-in duration-500">
                Join
            </button>
        </div>
    </div>

}

const GiftCardSection: FunctionComponent = () => {
    return <div className='flex flex-col space-y-2 px-16 py-6'>
        <div className="text-4xl font-['Play'] w-full">
            Track order
        </div>
        <div className="text-4xl font-['Play'] w-full">
            Order No. #123456
        </div>
        <Timeline active={2} color='dark' bulletSize='36'>
            <Timeline.Item title="Cart" className='text-3xl font-["Play"] leading-[8px] w-full'/>
            <Timeline.Item title="Confirm Order" className='text-3xl font-["Play"] leading-[8px] w-full'/>
            <Timeline.Item title="Payment" className='text-3xl font-["Play"] leading-[8px] w-full'/>
            <Timeline.Item title="Dispatched for delivery" className='text-3xl font-["Play"] leading-[8px] w-full'/>
            <Timeline.Item title="Delivered" className='text-3xl font-["Play"] leading-[8px] w-full'/>
        </Timeline>
        <div className="overflow-hidden bg-white flex flex-col justify-end pt-16 gap-1 w-full items-start">
            <div className='flex flex-col space-y-4'>
                <div className='flex flex-row space-x-12'>
                    <Checkbox size='xl' color='dark' checked={true}/>
                    <div className="text-3xl font-['Play']">
                        All
                    </div>
                    <div className="text-3xl font-['Play']">
                        Item
                    </div>
                    <div className="text-3xl font-['Play']">
                        Price
                    </div>
                    <div className="text-3xl font-['Play']">
                        Qty
                    </div>
                    <div className="text-3xl font-['Play']">
                        Total
                    </div>
                </div>
                <div className="flex flex-row justify-between ml-16">
                    <div className="text-3xl font-['Play'] font-bold">
                        Add on items
                    </div>
                    <Button color='dark' variant='outline'>Pick</Button>
                </div>
                <div className="flex flex-row justify-start gap-6 items-start">
                    <img
                        src="https://file.rendit.io/n/NuwJAl5Ml4449AemENtf.svg"
                        className="min-h-0 min-w-0 mb-2 w-10 shrink-0"
                    />
                    <div className="text-3xl font-['Play'] font-bold">
                        Brocade Official
                    </div>
                </div>
                <div className="self-stretch flex flex-row justify-start items-center space-x-6">
                    <Checkbox size='xl' color='dark' checked={true}/>
                    <img
                        src="https://file.rendit.io/n/ygFupjPO0qx44IeMKfN0.png"
                        className="min-h-0 min-w-0 self-center mr-12"
                    />
                    <Alert variant='filled' radius='xl' color='dark'>
                        <h4 className='px-8'>XS</h4>
                    </Alert>
                    <div className="font-['Play'] font-bold">
                        Rs. 2500
                    </div>
                    <QuantityInput/>
                    <div className="self-center flex flex-col justify-start gap-16 w-2/5 h-20 items-start">
                        <div className="font-['Play'] font-bold leading-[24.8px] ml-6 w-32 h-[21.69%]">
                            Rs. 2500
                        </div>
                        <div className="text-right text-xs font-['Circular_Std'] leading-[8px] text-[#9b9b9b] self-stretch h-[7.23%]">
                            August 13, 2019
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch flex flex-row justify-between items-center mb-3 ml-12 mr-64">
                <div className="text-4xl font-['Play'] leading-[8px] w-[393px] shrink-0 h-full">
                    Order Summary
                </div>
                <button className="flex flex-row justify-start gap-1 w-16 shrink-0 items-center">
                    <div className="text-xs font-['Circular_Std'] leading-[13.8px] text-[#9b9b9b] w-3/5 h-[58.13%]">
                        Helpful
                    </div>
                    <img
                        src="https://file.rendit.io/n/UFUzoL5CKf4TRNSY9zB6.svg"
                        className="min-h-0 min-w-0 w-6 shrink-0"
                    />
                </button>
            </div>
            <div className="flex flex-row justify-between w-3/5 items-center mb-4 ml-12">
                <div className="text-3xl font-['Play'] leading-[8px] mt-1 w-40 shrink-0 h-full">
                    Subtotal
                </div>
                <div className="font-['Play'] font-bold leading-[24.8px] self-start w-32 shrink-0 h-[50%]">
                    Rs. 7500
                </div>
            </div>
            <div className="overflow-hidden bg-black flex flex-col justify-start items-center mb-16 ml-[361px] px-8 rounded">
                <div className="text-xs font-['Open_Sans'] leading-[18.6px] text-white w-full">
                    Checkout
                </div>
            </div>
            <div className="text-2xl font-['Play'] leading-[8px] w-[463px] h-[2.04%] mb-6 ml-12">
                We Accept <br />
                <br />
                <br /> Khalti
            </div>
            <div className="bg-[#161214] self-stretch flex flex-row justify-start gap-12 h-[326px] shrink-0 items-start mb-0 ml-[-12px] px-[115px] py-16">
                <div className="self-end relative flex flex-col justify-start mb-px pb-40 w-[142px] shrink-0 items-stretch">
                    <div className="w-[142px] h-[85.27%] text-sm font-sans leading-[30px] text-white absolute top-6 left-0">
                        Boudha
                        {"     "}
                        <br />
                        Jhamsikhel
                        <br />
                        Pokhara
                        <br />
                        Chitwan
                    </div>
                    <div className="text-2xl font-['Morganite'] font-semibold tracking-[2] uppercase text-white mr-8 h-full">
                        Flagship Stores
                        <br />
                    </div>
                </div>
                <div className="self-end flex flex-col justify-start mr-12 gap-3 items-stretch">
                    <div className="text-2xl font-['Morganite'] font-semibold tracking-[2] uppercase text-white mr-12 h-[8.94%]">
                        Navigation
                    </div>
                    <div className="text-sm font-sans leading-[30px] text-white ml-px h-[84.86%]">
                        Home
                        {"      "}
                        <br />
                        Search
                        <br />
                        Wishlist
                        <br />
                        Cart
                        <br />
                        Profile
                        <br />
                        Help Centre
                    </div>
                </div>
                <div className="flex flex-col justify-start gap-3 items-start mt-3 mr-16">
                    <div className="text-2xl font-['Morganite'] font-semibold tracking-[2] uppercase text-white w-12 h-[12.46%]">
                        LEGAL
                    </div>
                    <div className="text-sm font-sans leading-[30px] text-white self-stretch h-[79.17%]">
                        Payment Policy
                        <br />
                        Terms of Service
                        <br />
                        Affiliate Programs
                        <br />
                        FAQ
                    </div>
                </div>
                <div className="flex flex-col justify-start gap-3 items-start mt-3 mr-20">
                    <div className="font-['Morganite'] font-bold uppercase text-white w-3/5 h-[20.58%]">
                        TALK TO US
                    </div>
                    <div className="text-sm font-sans leading-[30px] text-white self-stretch ml-0 h-[63.42%]">
                        01-4813643
                    </div>
                </div>
                <div className="flex flex-col justify-start mt-3 gap-3 items-center">
                    <div className="font-['Morganite'] font-bold uppercase text-white self-stretch mr-12 h-[25.95%]">
                        Follow us
                    </div>
                    <img
                        src="https://file.rendit.io/n/3gvyKkHTectRPA1H9ZvO.svg"
                        className="min-h-0 min-w-0"
                    />
                </div>
            </div>
        </div>
        <div
            className="bg-[url(https://file.rendit.io/n/64oyOyvacDb0fBimw6RV.png)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-start gap-6 relative w-full items-center px-1">
            <img
                src="https://file.rendit.io/n/oGbEZet5JXvpBkDdntSY.png"
                className="min-h-0 min-w-0 relative my-0"
            />
            <div className="self-start flex flex-col justify-start mt-3 gap-px relative w-1/2 items-start">
                <div
                    className="text-6xl font-['Morganite'] font-black tracking-[1.44] leading-[87.5px] text-white self-center mb-2 relative w-full h-[18.04%]">
                    Brocade Gift Card
                </div>
                <div
                    className="text-4xl font-['Morganite'] font-bold tracking-[0.8] text-[#fefefe] relative w-1/5 h-[8.75%] mb-1 ml-3">
                    Denominations
                </div>
                <div className="flex flex-row justify-start gap-px relative items-center mb-2 ml-3">
                    <div
                        className="border-solid border-[#608fa3] bg-[#608fa2] relative w-6 shrink-0 h-6 mt-px mr-2 border-2"/>
                    <div
                        className="whitespace-nowrap text-xl font-['Montserrat'] font-medium tracking-[0.6] text-black mr-8 relative">
                        Rs. 1000
                    </div>
                    <div className="border-solid border-[#608fa3] bg-[#608fa2] mr-3 relative w-6 shrink-0 h-6 border-2"/>
                    <div className="text-xl font-['Montserrat'] font-medium tracking-[0.6] text-black mr-8 relative">
                        Rs.2000
                    </div>
                    <div className="border-solid border-[#608fa3] bg-[#608fa2] relative w-6 shrink-0 h-6 border-2"/>
                    <div className="text-xl font-['Montserrat'] font-medium tracking-[0.6] text-black relative">
                        Rs.2500
                    </div>
                </div>
                <div className="flex flex-row justify-start gap-4 relative items-center mb-4 ml-2">
                    <div
                        className="border-solid border-[#608fa3] bg-[#608fa2] relative w-6 shrink-0 h-6 mb-1 mr-px border-2"/>
                    <div
                        className="text-xl font-['Montserrat'] font-medium tracking-[0.6] text-black self-start mr-5 relative">
                        Rs.5000
                    </div>
                    <div className="border-solid border-[#608fa3] bg-[#608fa2] relative w-6 shrink-0 h-6 border-2"/>
                    <div className="text-xl font-['Montserrat'] font-medium tracking-[0.6] text-black self-start relative">
                        Rs.10000
                    </div>
                </div>
                <div className="text-4xl font-['Morganite'] font-bold tracking-[0.8] text-[#fefefe] ml-2 relative">
                    Quantity
                </div>
                <button
                    className="bg-[#e9ecef] flex flex-col justify-start mb-6 relative h-10 shrink-0 items-end pr-0 py-2 rounded-[22.11474609375px]">
                    <div
                        className="text-xl font-['Open_Sans'] font-semibold leading-[31px] text-[#0b0b0b] ml-4 relative w-5/6 h-full">
                        -{"   "}1{"  "}+
                    </div>
                </button>
                <div className="flex flex-row justify-start ml-px gap-6 relative items-center">
                    <button
                        className="bg-[#25262b] flex flex-col justify-center pl-12 relative w-[282px] shrink-0 h-16 items-start rounded-sm">
                        <div
                            className="whitespace-nowrap text-xl font-['Open_Sans'] font-semibold leading-[31px] text-white relative">
                            Buy it Now
                        </div>
                    </button>
                    <div
                        className="bg-[url(https://file.rendit.io/n/5l7M6uAo7fUEkvyHe4a6.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center relative w-12 shrink-0 h-12 items-center">
                        <img
                            src="https://file.rendit.io/n/elm4E1YLQ6hvTsKqwy1S.svg"
                            className="min-h-0 min-w-0 relative w-6"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const ProductsSection: FunctionComponent = () => {
    const productsQuery = api.product.getAll.useQuery();

    if(!productsQuery.isSuccess) return null

    return <Grid className='bg-[#272727] p-36'>
        <Grid.Col span={4}>
            <ProductItem/>
        </Grid.Col>
        <Grid.Col span={4}>
            <ProductItem/>
        </Grid.Col>
        <Grid.Col span={4}>
            <ProductItem/>
        </Grid.Col>
        <Grid.Col span={4}>
            <ProductItem/>
        </Grid.Col>
    </Grid>;
}

export default function Home() {
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url}/>
        </Carousel.Slide>
    ));

    return (
        <>
            <Head>
                <title>Brocade</title>
                <meta name="description" content="Fashion store"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <div className='space-y-8 flex flex-col'>
                    <Carousel
                        className='w-screen h-[50vw]'
                        withIndicators
                        previousControlIcon={<IconArrowLeft size={16}/>}
                        nextControlIcon={<IconArrowRight size={16}/>}
                        styles={{
                            indicator: {
                                width: rem(16),
                                height: rem(8),
                                backgroundColor: 'dimgray',
                                transition: 'width 250ms ease',

                                '&[data-active]': {
                                    width: rem(56),
                                    backgroundColor: 'white',
                                },
                            },
                        }}
                    >
                        {slides}
                    </Carousel>
                    <ProductsSection/>
                    <ShopByCategorySection/>
                    <ShopTheLookSection/>
                    <SubscribeSection/>
                    <GiftCardSection/>
                </div>
            </main>
        </>
    )
}

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `${rem(6)} ${theme.spacing.xs}`,
        borderRadius: theme.radius.sm,
        border: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]
        }`,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,

        '&:focus-within': {
            borderColor: theme.colors[theme.primaryColor]![6],
        },
    },

    control: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        border: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]
        }`,

        '&:disabled': {
            borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3],
            opacity: 0.8,
            backgroundColor: 'transparent',
        },
    },

    input: {
        textAlign: 'center',
        paddingRight: `${theme.spacing.sm} !important`,
        paddingLeft: `${theme.spacing.sm} !important`,
        height: rem(28),
        flex: 1,
    },
}));

interface QuantityInputProps {
    min?: number;
    max?: number;
}

export function QuantityInput({ min = 1, max = 10 }: QuantityInputProps) {
    const { classes } = useStyles();
    const handlers = useRef<NumberInputHandlers>(null);
    const [value, setValue] = useState<number | ''>(1);

    return (
        <div className={classes.wrapper}>
            <ActionIcon<'button'>
                size={28}
                variant="transparent"
                onClick={() => handlers.current?.decrement()}
                disabled={value === min}
                className={classes.control}
                onMouseDown={(event) => event.preventDefault()}
            >
                <IconMinus size="1rem" stroke={1.5} />
            </ActionIcon>

            <NumberInput
                variant="unstyled"
                min={min}
                max={max}
                handlersRef={handlers}
                value={value}
                onChange={setValue}
                classNames={{ input: classes.input }}
            />

            <ActionIcon<'button'>
                size={28}
                variant="transparent"
                onClick={() => handlers.current?.increment()}
                disabled={value === max}
                className={classes.control}
                onMouseDown={(event) => event.preventDefault()}
            >
                <IconPlus size="1rem" stroke={1.5} />
            </ActionIcon>
        </div>
    );
}
