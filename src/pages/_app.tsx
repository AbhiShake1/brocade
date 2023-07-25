import {type AppType} from "next/app";
import {api} from "~/utils/api";
import "~/styles/globals.css";
import Header from "~/components/Header";
import {Footer, MantineProvider} from "@mantine/core";
import {SpotlightProvider} from "@mantine/spotlight";
import {IconSearch} from "@tabler/icons-react";
import {AppFooter} from "~/components/AppFooter";
import {ModalsProvider} from "@mantine/modals";
import {Toaster} from "react-hot-toast";
import {ClerkProvider} from "@clerk/nextjs";
import {useEffect} from "react";
import {useCartStore} from "~/stores/cart";

let isSet = false

const MyApp: AppType = ({Component, pageProps}) => {
    const cart = api.cart.get.useQuery()
    const {initCart} = useCartStore()

    useEffect(() => {
        if (isSet) return
        if (cart.isSuccess) {
            initCart(cart.data)
            isSet = true
        }
    }, [cart])

    return <MantineProvider withGlobalStyles withNormalizeCSS theme={{loader: 'oval'}}>
        <ModalsProvider>
            <ClerkProvider {...pageProps}>
                <SpotlightProvider
                    actions={[]}
                    searchIcon={<IconSearch size="1.2rem"/>}
                    searchPlaceholder="Search..."
                    shortcut="mod + shift + 1"
                    nothingFoundMessage="Nothing found..."
                >
                    <Header/>
                    <Toaster position='bottom-center'/>

                    <Component {...pageProps} />
                    <Footer height='auto'>
                        <AppFooter/>
                    </Footer>
                </SpotlightProvider>
            </ClerkProvider>
        </ModalsProvider>
    </MantineProvider>;
};

export default api.withTRPC(MyApp);
