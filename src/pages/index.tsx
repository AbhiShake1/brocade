import Head from "next/head";
import {api} from "~/utils/api";
import {Carousel} from "@mantine/carousel";
import {ActionIcon, createStyles, Grid, Image, NumberInput, type NumberInputHandlers, rem} from "@mantine/core";
import {IconArrowLeft, IconArrowRight, IconMinus, IconPlus} from "@tabler/icons-react";
import ProductItem from "~/components/ProductItem";
import type {FunctionComponent} from "react";
import React, {useEffect, useRef, useState} from 'react';
import ShopByCategoryItem from "~/components/ShopByCategoryItem";
import {modals} from "@mantine/modals";
import AddItemModal from "~/components/modals/AddItemModal";
import {useProductStore} from "~/stores/product";

const images: string[] = [
    'https://www.promostyl.com/wp-content/uploads/2019/06/fenty-brand-campaign-002-without-logo-url-glen-luchford-1558621091.jpg',
    'https://www.promostyl.com/wp-content/uploads/2019/06/fenty-brand-campaign-002-without-logo-url-glen-luchford-1558621091.jpg',
    'https://www.promostyl.com/wp-content/uploads/2019/06/fenty-brand-campaign-002-without-logo-url-glen-luchford-1558621091.jpg',
    'https://www.promostyl.com/wp-content/uploads/2019/06/fenty-brand-campaign-002-without-logo-url-glen-luchford-1558621091.jpg',
];

const ShopByCategorySection: FunctionComponent = () => {
    const query = api.product.getCategories.useQuery()

    if (!query.isSuccess) return null

    return <Grid className='px-36'>
        <Grid.Col span={4}>
            {query.data.map(p => <ShopByCategoryItem category={p.category} imageUrl={p.imageUrl} key={p.id} id={p.id}/>)}
        </Grid.Col>
    </Grid>
}

const GiftCardSection: FunctionComponent = () => {
    return <div className='flex flex-col space-y-2 px-16 py-6'>
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
                <div className="text-4xl font-['Morganite'] fon
                t-bold tracking-[0.8] text-[#fefefe] ml-2 relative">
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
    const {products, setProducts} = useProductStore()

    const productQuery = api.product.getAll.useQuery()

    useEffect(() => {
        if (!productQuery.isSuccess) return
        setProducts(productQuery.data)
    }, [productQuery.isSuccess])

    return <Grid className='bg-[#272727] p-36'>
        {products.map(p => (
            <Grid.Col span={4} key={p.id}>
                <ProductItem {...p}/>
            </Grid.Col>
        ))}
        <Grid.Col span={4}>
            <button onClick={() => modals.open({
                title: 'Add new item',
                centered: true,
                children: <AddItemModal onPost={p => {
                    modals.closeAll()
                    setProducts(pr => [p, ...pr])
                }}/>
            })}>
                <div className="w-[269px] h-[331px] relative">
                    <div
                        className="w-[269px] h-[331px] left-0 top-0 absolute bg-zinc-300 bg-opacity-30 rounded-3xl shadow backdrop-blur-[15px] flex flex-col items-center justify-center">
                        <h1 className='font-medium text-6xl scale-[4]'>+</h1>
                    </div>
                </div>
            </button>
        </Grid.Col>
    </Grid>
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
    defaultValue?: number
    onChange?: (quantity: number) => void;
}

export function QuantityInput({min = 1, max, defaultValue = 1, onChange}: QuantityInputProps) {
    const {classes} = useStyles();
    const handlers = useRef<NumberInputHandlers>(null);
    const [value, setValue] = useState<number | ''>(defaultValue);

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
                onChange={(val) => {
                    if (val == '') return
                    console.log(val)
                    setValue(val)
                    onChange?.call(undefined, val)
                }}
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
