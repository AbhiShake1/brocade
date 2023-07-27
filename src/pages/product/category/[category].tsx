import React, {useEffect} from 'react';
import {NextPage} from "next";
import {useRouter} from "next/router";
import {api} from "~/utils/api";
import {useSearchStore} from "~/stores/search";
import {Grid} from "@mantine/core";
import ProductItem from "~/components/ProductItem";

const Index: NextPage = () => {
    const router = useRouter()
    const category = router.query.category as string
    const {query} = useSearchStore()
    const productMutation = api.product.getByCategory.useMutation()
    useEffect(() => {
        productMutation.mutate({category, query})
    }, [])

    if (!productMutation.isSuccess) return null
    return <Grid className='py-18 px-36'>
        {productMutation.data.map(p => (
            <Grid.Col span={4} key={p.id}>
                <ProductItem {...p}/>
            </Grid.Col>
        ))}
    </Grid>
}

export default Index;