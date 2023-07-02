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
    return <div className='pt-2 pb-8 flex-col space-y-2 justify-center items-center bg-gradient-to-r from-pink-950 via-gray-800 to-pink-950'>
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
            <button className="bg-[#0a232d] flex flex-col justify-center relative h-16 items-center px-20 text-center text-2xl font-['Montserrat'] font-semibold text-white hover:bg-white hover:text-black transition-colors ease-in duration-500">
                Join
            </button>
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
                </div>
            </main>
        </>
    )
}
