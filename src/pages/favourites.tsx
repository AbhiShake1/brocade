import React, {useEffect, useState} from 'react';
import {Product} from "@prisma/client";
import {api} from "~/utils/api";
import {Grid} from "@mantine/core";
import ProductItem from "~/components/ProductItem";
import {modals} from "@mantine/modals";
import AddItemModal from "~/components/modals/AddItemModal";

const Favourites = () => {
    const [products, setProducts] = useState<(Product & { isFavourite: boolean })[]>([])
    const productsQuery = api.product.favourites.useQuery()

    useEffect(() => {
        if (!productsQuery.isSuccess) return
        setProducts(productsQuery.data)
    }, [productsQuery])

    if (!productsQuery.isSuccess || productsQuery.data?.length == 0) return null

    return <Grid className='bg-[#272727] p-36'>
        {products.map(p => (
            <Grid.Col span={4} key={p.id}>
                <ProductItem {...p}/>
            </Grid.Col>
        ))}
    </Grid>
};

export default Favourites;