import Head from "next/head";
import {api} from "~/utils/api";
import {Carousel} from "@mantine/carousel";
import {rem, Image, Grid} from "@mantine/core";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";
import ProductItem from "~/components/ProductItem";

const images: string[] = [
    'https://www.promostyl.com/wp-content/uploads/2019/06/fenty-brand-campaign-002-without-logo-url-glen-luchford-1558621091.jpg',
    'https://www.promostyl.com/wp-content/uploads/2019/06/fenty-brand-campaign-002-without-logo-url-glen-luchford-1558621091.jpg',
    'https://www.promostyl.com/wp-content/uploads/2019/06/fenty-brand-campaign-002-without-logo-url-glen-luchford-1558621091.jpg',
    'https://www.promostyl.com/wp-content/uploads/2019/06/fenty-brand-campaign-002-without-logo-url-glen-luchford-1558621091.jpg',
];

export default function Home() {
    const hello = api.example.hello.useQuery({text: "from tRPC"});
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} />
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
                </div>
            </main>
        </>
    )
}
