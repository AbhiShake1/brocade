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

const MyApp: AppType = ({Component, pageProps}) => {
    return <MantineProvider withGlobalStyles withNormalizeCSS theme={{loader: 'oval'}}>
        <ModalsProvider>
            <SpotlightProvider
                actions={[]}
                searchIcon={<IconSearch size="1.2rem"/>}
                searchPlaceholder="Search..."
                shortcut="mod + shift + 1"
                nothingFoundMessage="Nothing found..."
            >
                <Header/>
                <Toaster position='bottom-center'/>
                <ClerkProvider {...pageProps}>
                    <Component {...pageProps} />
                </ClerkProvider>
                <Footer height='auto'>
                    <AppFooter/>
                </Footer>
            </SpotlightProvider>
        </ModalsProvider>
    </MantineProvider>;
};

export default api.withTRPC(MyApp);
