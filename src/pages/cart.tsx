import React from 'react';
import {Alert, Checkbox, Table} from "@mantine/core";
import {QuantityInput} from "~/pages/index";
import {useCartStore} from "~/stores/cart";

const items = [
    {
        id: 1,
        name: 'P1',
        description: 'desc',
        price: 500,
        imageUrl: 'https://file.rendit.io/n/ygFupjPO0qx44IeMKfN0.png',
        category: 'cloth'
    },
    {
        id: 2,
        name: 'P1',
        description: 'desc',
        price: 2500,
        imageUrl: 'https://file.rendit.io/n/ygFupjPO0qx44IeMKfN0.png',
        category: 'cloth'
    },
    {
        id: 3,
        name: 'P1',
        description: 'desc',
        price: 1000,
        imageUrl: 'https://file.rendit.io/n/ygFupjPO0qx44IeMKfN0.png',
        category: 'cloth'
    },
    {
        id: 4,
        name: 'P1',
        description: 'desc',
        price: 10500,
        imageUrl: 'https://file.rendit.io/n/ygFupjPO0qx44IeMKfN0.png',
        category: 'cloth'
    },
    {
        id: 5,
        name: 'P1',
        description: 'desc',
        price: 15000,
        imageUrl: 'https://file.rendit.io/n/ygFupjPO0qx44IeMKfN0.png',
        category: 'cloth'
    },
]

const Cart = () => {
    const {addToCart, removeFromCart, cartItems} = useCartStore()

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
                {items.map(item => (
                    <tr key={item.id}>
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
                                <QuantityInput/>
                            </div>
                        </td>
                        <td>
                            <div className="font-['Play'] font-bold text-2xl">
                                Rs. 2500
                            </div>
                        </td>
                    </tr>
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
        </div>
    );
};

export default Cart;