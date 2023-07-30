import React, {type FunctionComponent, useEffect, useState} from 'react';
import {Alert, Checkbox, Table} from "@mantine/core";
import {QuantityInput} from "~/pages/index";
import {useCartStore} from "~/stores/cart";
import {api} from "~/utils/api";
import type {Product} from "@prisma/client";
import CheckoutButton from "~/components/CheckoutButton";
import {toast} from "react-hot-toast";

interface CartWithCheck {
    id: string
    checked: boolean
}

const Cart = () => {
    const {cartItems} = useCartStore()
    const denoQuery = api.cart.getGiftCards.useQuery()
    const [allChecked, setAllChecked] = useState(false)
    const [checks, setChecks] = useState<CartWithCheck[]>([])

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
                    <th className='max-w-[0px]'><Checkbox size='xl' color='dark' checked={allChecked}
                                                          onChange={e => {
                                                              const allChecked = e.currentTarget.checked
                                                              setChecks(c => c.map(i => ({...i, checked: allChecked})))
                                                              setAllChecked(allChecked)
                                                          }}
                                                          label='All'/>
                    </th>
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
                    <CartRow quantity={quantity} item={item} key={item.id}
                             onInit={() => {
                                 if (checks.filter(c => c.id == item.id).length == 0)
                                     checks.push({id: item.id, checked: false})
                             }}
                             isChecked={checks.filter(s => s.id == item.id)[0]?.checked ?? false}
                             onCheckChange={(val) => {
                                 setChecks(p => p.map(i => i.id == item.id ? {...i, checked: val} : i))
                                 setAllChecked(checks.every(c => !c.checked))
                             }}/>
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
                <CheckoutButton amount={200} onSuccess={() => {
                    toast.success('checked out')
                }}/>
                {/*<div className="text-2xl font-['Play'] leading-[8px] w-[463px] h-[2.04%] mb-6 ml-12 mt-4">*/}
                {/*    We Accept Khalti*/}
                {/*</div>*/}
            </div>

            <div className='flex flex-col space-y-6'>
                <h1 className='mt-12 pl-2'>Gift Cards</h1>
                {
                    denoQuery.isSuccess && denoQuery.data.map(deno => {
                        return (
                            <div key={deno.id} className='flex flex-col space-y-2 px-16 py-6'>
                                <div
                                    className="bg-[url(https://file.rendit.io/n/64oyOyvacDb0fBimw6RV.png)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-start gap-6 relative w-full items-center px-1">
                                    <img
                                        src="https://file.rendit.io/n/oGbEZet5JXvpBkDdntSY.png"
                                        className="min-h-0 min-w-0 relative my-0"
                                    />
                                    <div
                                        className="self-start flex flex-col justify-start mt-3 gap-px relative w-1/2 items-start">
                                        <div
                                            className="text-6xl font-['Morganite'] font-black tracking-[1.44] leading-[87.5px] text-white self-center mb-2 relative w-full h-[18.04%]">
                                            Brocade Gift Card
                                        </div>
                                        <div
                                            className="text-4xl font-['Morganite'] font-bold tracking-[0.8] text-[#fefefe] relative w-1/5 h-[8.75%] mb-1 ml-3">
                                            Denominations
                                        </div>
                                        <h1 className='pb-8 pl-3 text-gray-400'>Rs.{deno.deno}</h1>
                                        <div className="text-4xl font-['Morganite'] fon
                t-bold tracking-[0.8] text-[#fefefe] ml-2 relative">
                                            Quantity
                                        </div>
                                        <h1 className='pb-8 pl-3 text-gray-400'>{deno.amount}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

interface CartRowProps {
    item: Product
    quantity: number
    onInit: () => void
    isChecked: boolean
    onCheckChange: (value: boolean) => void
}

const CartRow: FunctionComponent<CartRowProps> = ({item, quantity, onInit, isChecked, onCheckChange}) => {
    const {updateCart} = useCartStore()
    const [quan, setQuan] = useState(quantity)

    useEffect(() => {
        onInit()
    }, [])

    const updateCartMutation = api.cart.updateCart.useMutation({
        onSuccess: item => {
            if (item) {
                setQuan(item.quantity)
                updateCart(item, item.quantity)
            }
        }
    })

    return <tr key={item.id}>
        <td><Checkbox size='xl' color='dark' checked={isChecked} onChange={e => {
            onCheckChange(e.currentTarget.checked)
        }}/></td>
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