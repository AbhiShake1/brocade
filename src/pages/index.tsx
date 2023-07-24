import Head from "next/head";
import {api} from "~/utils/api";
import {Carousel} from "@mantine/carousel";
import {Alert, Button, Checkbox, Grid, Image, Table, TextInput, Timeline} from "@mantine/core";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";
import ProductItem from "~/components/ProductItem";
import type {FunctionComponent} from "react";
import ShopByCategoryItem from "~/components/ShopByCategoryItem";
import ShopTheLookItem from "~/components/ShopTheLookItem";
import {useRef, useState} from 'react';
import {createStyles, NumberInput, type NumberInputHandlers, ActionIcon, rem} from '@mantine/core';
import {IconPlus, IconMinus} from '@tabler/icons-react';

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
        <div className="flex flex-row justify-start gap-6 items-start pt-8">
            <img
                src="https://file.rendit.io/n/NuwJAl5Ml4449AemENtf.svg"
                className="min-h-0 min-w-0 mb-2 w-10 shrink-0"
            />
            <div className="text-3xl font-['Play'] font-bold">
                Brocade Official
            </div>
        </div>
        <Table>
            <thead>
            <tr>
                <th className='max-w-[0px]'><Checkbox size='xl' color='dark' checked={true} label='All'/></th>
                <th>
                    <div className="text-3xl font-['Play']">
                        Item
                    </div>
                </th>
                <th>
                    <div className="text-3xl font-['Play']">
                        Size
                    </div>
                </th>
                <th>
                    <div className="text-3xl font-['Play']">
                        Price
                    </div>
                </th>
                <th>
                    <div className="text-3xl font-['Play']">
                        Qty
                    </div>
                </th>
                <th>
                    <div className="text-3xl font-['Play']">
                        Total
                    </div>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr key='key'>
                <td><Checkbox size='xl' color='dark' checked={true}/></td>
                <td><img src="https://file.rendit.io/n/ygFupjPO0qx44IeMKfN0.png"/></td>
                <td>
                    <Alert variant='filled' radius='xl' color='dark' className='max-w-[108px]'>
                        <h4 className='px-8'>XS</h4>
                    </Alert>
                </td>
                <td>
                    <div className="font-['Play'] font-bold text-2xl">
                        Rs. 2500
                    </div>
                </td>
                <td>
                    <div className='w-28'>
                        <QuantityInput/>
                    </div>
                </td>
                <td>
                    <div className="font-['Play'] font-bold text-2xl">
                        Rs. 2500
                    </div>
                </td>
            </tr>
            </tbody>
        </Table>
        <div className="overflow-hidden bg-white flex flex-col justify-end pt-16 gap-1 w-full items-start">
            {/*<div className='flex flex-col space-y-4'>*/}
            {/*    <div className="flex flex-row justify-between ml-16">*/}
            {/*        <div className="text-3xl font-['Play'] font-bold">*/}
            {/*            Add on items*/}
            {/*        </div>*/}
            {/*        <Button color='dark' variant='outline'>Pick</Button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="text-2xl font-['Play'] leading-[8px] w-[463px] h-[2.04%] mb-6 ml-12 mt-4">
                We Accept Khalti
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
                    <div
                        className="border-solid border-[#608fa3] bg-[#608fa2] mr-3 relative w-6 shrink-0 h-6 border-2"/>
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
                    <div
                        className="text-xl font-['Montserrat'] font-medium tracking-[0.6] text-black self-start relative">
                        Rs.10000
                    </div>
                </div>
                <div className="text-4xl font-['Morganite'] font-bold tracking-[0.8] text-[#fefefe] ml-2 relative">
                    Quantity
                </div>
                <div className='my-4 ml-4 bg-red-900'>
                    <QuantityInput/>
                </div>
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

    if (!productsQuery.isSuccess) return null

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
        height: rem(28),
        width: rem(28),
        flex: 1,
    },
}));

interface QuantityInputProps {
    min?: number;
    max?: number;
}

export function QuantityInput({min = 1, max = 10}: QuantityInputProps) {
    const {classes} = useStyles();
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
                <IconMinus size="1rem" stroke={1.5}/>
            </ActionIcon>

            <NumberInput
                variant="unstyled"
                min={min}
                max={max}
                handlersRef={handlers}
                value={value}
                onChange={setValue}
                classNames={{input: classes.input}}
            />

            <ActionIcon<'button'>
                size={28}
                variant="transparent"
                onClick={() => handlers.current?.increment()}
                disabled={value === max}
                className={classes.control}
                onMouseDown={(event) => event.preventDefault()}
            >
                <IconPlus size="1rem" stroke={1.5}/>
            </ActionIcon>
        </div>
    );
}
