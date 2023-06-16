import {type AppType} from "next/app";
import {api} from "~/utils/api";
import "~/styles/globals.css";
import Header from "~/components/Header";
import {MantineProvider} from "@mantine/core";

const MyApp: AppType = ({Component, pageProps}) => {
    return <MantineProvider withGlobalStyles withNormalizeCSS theme={{loader: 'oval'}}>
        <Header/>
        <Component {...pageProps} />
    </MantineProvider>;
};

export default api.withTRPC(MyApp);
