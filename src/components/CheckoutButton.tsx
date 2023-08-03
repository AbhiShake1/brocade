// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import KhaltiCheckout from "khalti-checkout-web";
import type {FunctionComponent} from "react";
import {toast} from "react-hot-toast";
import {Button} from "@mantine/core";

interface Props {
    amount: number
    onSuccess: (amount: number) => void,
}

const CheckoutButton: FunctionComponent<Props> = ({amount, onSuccess}) => {
    const config = {
        "publicKey": "test_public_key_1afd1d2aa7cb409e9a89df9e83c10741",
        "productIdentity": "1234567890",
        "productName": "Drogon",
        "productUrl": "http://gameofthrones.com/buy/Dragons",
        "eventHandler": {
            onSuccess() {
                onSuccess(amount)
            },
            onError(error: any) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
                toast.error(error?.toString() ?? 'Unknown error occurred')
            }
        },
        paymentPreference: [
            "MOBILE_BANKING",
            "KHALTI",
            "EBANKING",
            "CONNECT_IPS",
            "SCT",
        ],
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
    const checkout = new KhaltiCheckout(config)

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
    return <Button size='xl' disabled={amount == 0} variant='outline'
                   onClick={() => checkout.show({amount: amount * 100})}>Pay
        Rs.{amount}</Button>
}

export default CheckoutButton;