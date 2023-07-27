import React, {type FunctionComponent, useState} from 'react';
import {Alert, Checkbox, Table, Timeline} from "@mantine/core";
import {QuantityInput} from "~/pages/index";
import {useCartStore} from "~/stores/cart";
import {api} from "~/utils/api";
import type {Product} from "@prisma/client";

const Cart = () => {
    const {cartItems} = useCartStore()
    const denoQuery = api.cart.getGiftCards.useQuery()

    if (!cartItems?.productInCart) return null

    return (
        <div className='py-8 px-16'>
            <div className="flex flex-row justify-start gap-6 items-start pt-8">
                <img
                    src="https://file.rendit.io/n/NuwJAl5Ml4449AemENtf.svg"
                    className="min-h-0 min-w-0 mb-2 w-10 shrink-0"
                />
                <div className="text-3xl font-['Play'] font-bold">
                    Brocade Official
                </div>
            </div>
            <Table>
                <thead>
                <tr>
                    <th className='max-w-[0px]'><Checkbox size='xl' color='dark' checked={true} label='All'/></th>
                    <th>
                        <div className="text-3xl font-['Play']">
                            Item
                        </div>
                    </th>
                    <th>
                        <div className="text-3xl font-['Play']">
                            Size
                        </div>
                    </th>
                    <th>
                        <div className="text-3xl font-['Play']">
                            Price
                        </div>
                    </th>
                    <th>
                        <div className="text-3xl font-['Play']">
                            Qty
                        </div>
                    </th>
                    <th>
                        <div className="text-3xl font-['Play']">
                            Total
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {cartItems.productInCart.map(({product: item, quantity}) => (
                    <CartRow quantity={quantity} item={item} key={item.id}/>
                ))}
                </tbody>
            </Table>
            <div className="overflow-hidden bg-white flex flex-col justify-end pt-16 gap-1 w-full items-start">
                {/*<div className='flex flex-col space-y-4'>*/}
                {/*    <div className="flex flex-row justify-between ml-16">*/}
                {/*        <div className="text-3xl font-['Play'] font-bold">*/}
                {/*            Add on items*/}
                {/*        </div>*/}
                {/*        <Button color='dark' variant='outline'>Pick</Button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="text-2xl font-['Play'] leading-[8px] w-[463px] h-[2.04%] mb-6 ml-12 mt-4">
                    We Accept Khalti
                </div>
            </div>

            <div className="text-4xl font-['Play'] w-full mt-8">
                Track order
            </div>
            <div className="text-4xl font-['Play'] w-full">
                Order No. #123456
            </div>
            <Timeline active={2} color='dark' bulletSize='36'>
                <Timeline.Item title="Cart" className='text-3xl font-["Play"] leading-[8px] w-full'/>
                <Timeline.Item title="Confirm Order" className='text-3xl font-["Play"] leading-[8px] w-full'/>
                <Timeline.Item title="Payment" className='text-3xl font-["Play"] leading-[8px] w-full'/>
                <Timeline.Item title="Dispatched for delivery" className='text-3xl font-["Play"] leading-[8px] w-full'/>
                <Timeline.Item title="Delivered" className='text-3xl font-["Play"] leading-[8px] w-full'/>
            </Timeline>
        </div>
    )
}

interface CartRowProps {
    item: Product
    quantity: number
}

const CartRow: FunctionComponent<CartRowProps> = ({item, quantity}) => {
    const {updateCart} = useCartStore()
    const [quan, setQuan] = useState(quantity)

    const updateCartMutation = api.cart.updateCart.useMutation({
        onSuccess: item => {
            if (item) {
                setQuan(item.quantity)
                updateCart(item, item.quantity)
            }
        }
    })

    return <tr key={item.id}>
        <td><Checkbox size='xl' color='dark' checked={true}/></td>
        <td><img src={item.imageUrl}/></td>
        <td>
            <Alert variant='filled' radius='xl' color='dark' className='max-w-[108px]'>
                <h4 className='px-8'>XS</h4>
            </Alert>
        </td>
        <td>
            <div className="font-['Play'] font-bold text-2xl">{item.price}</div>
        </td>
        <td>
            <div className='w-28'>
                <QuantityInput defaultValue={quantity} onChange={quantity => updateCartMutation.mutate({
                    quantity,
                    productId: item.id
                })}/>
            </div>
        </td>
        <td>
            <div className="font-['Play'] font-bold text-2xl">
                Rs.{item.price * quan}
            </div>
        </td>
    </tr>
}

export default Cart;