import Head from "next/head";
import {api} from "~/utils/api";

export default function Home() {
    const hello = api.example.hello.useQuery({text: "from tRPC"});

    return (
        <>
            <Head>
                <title>Brocade</title>
                <meta name="description" content="Fashion store"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main
                className="flex min-h-screen flex-col items-center justify-center">
            </main>
        </>
    )
}
