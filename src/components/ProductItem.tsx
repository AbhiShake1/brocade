import React, {type FunctionComponent, useState} from 'react';
import Image from "next/image";
import {IconHeart, IconHeartFilled, IconShoppingCart} from "@tabler/icons-react";
import {useRouter} from "next/router";
import {useCartStore} from "~/stores/cart";
import {api} from "~/utils/api";
import {toast} from "react-hot-toast";
import {ActionIcon} from "@mantine/core";

interface Props {
    id: string
    imageUrl: string
    name: string
    price: number
    isFavourite: boolean
}

const ProductItem: FunctionComponent<Props> = ({id, imageUrl, name, price, isFavourite}) => {
    const {push} = useRouter()
    const {addToCart} = useCartStore()
    const [isFav, setIsFav] = useState(isFavourite)

    const addToCartMutation = api.cart.addToCart.useMutation({
        onError: err => {
            toast.remove()
            toast.error(err.message)
        },
        onSuccess: data => {
            toast.remove()
            if (!data) return
            toast.success('Added to cart')
            addToCart(data)
        },
        onMutate: () => toast.loading('Adding to cart...')
    })

    const markFavouriteMutation = api.product.toggleFavourite.useMutation({
        onSuccess: setIsFav,
        onError: err => toast.error(err.message),
    })

    return <div className="w-[269px] h-[331px] relative">
        <div
            className="w-[269px] h-[331px] left-0 top-0 absolute bg-zinc-300 bg-opacity-30 rounded-3xl shadow backdrop-blur-[15px]"></div>
        <button onClick={() => void push(`/product/${id}`)}>
            <Image alt='' width={1080} height={1080}
                   className="w-[230px] h-[236px] left-[20px] top-[19px] absolute rounded-3xl object-cover"
                   src={imageUrl}/>
        </button>
        <ActionIcon className='bg-black rounded-full left-[171px] top-[272px] absolute' size='lg'
                    onClick={() => markFavouriteMutation.mutate({productId: id})}>
            {isFav ? <IconHeartFilled className='text-red-600' size='1rem'/> : <IconHeart size='1rem'/>}
        </ActionIcon>
        <ActionIcon className='bg-black rounded-full left-[214px] top-[272px] absolute' size='lg'
                    onClick={() => addToCartMutation.mutate({productId: id})}>
            <IconShoppingCart size="1rem"/>
        </ActionIcon>
        <div className="right-[156px] top-[272px] absolute text-white text-[20px] font-normal">
            <div className='flex flex-col space-y-2'>
                <h6 className='text-sm'>{name}</h6>
                <h6 className='text-sm'>Rs.{price}</h6>
            </div>
        </div>
    </div>
};

export default ProductItem;