import Head from "next/head";
import {api} from "~/utils/api";
import {Carousel} from "@mantine/carousel";
import {Grid, Image, rem, TextInput} from "@mantine/core";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";
import ProductItem from "~/components/ProductItem";
import type {FunctionComponent} from "react";
import ShopByCategoryItem from "~/components/ShopByCategoryItem";
import ShopTheLookItem from "~/components/ShopTheLookItem";

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
    return <div
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
}

export default function Home() {
    const hello = api.example.hello.useQuery({text: "from tRPC"});
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
                    <Grid className='bg-[#272727] p-36'>
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
                    </Grid>
                    <ShopByCategorySection/>
                    <ShopTheLookSection/>
                    <SubscribeSection/>
                    <GiftCardSection/>
                </div>
            </main>
        </>
    )
}
