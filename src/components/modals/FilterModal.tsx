import React, {type FunctionComponent} from 'react';
import {TextInput} from "@mantine/core";
import {api} from "~/utils/api";
import {useProductStore} from "~/stores/product";
import {IconSearch} from "@tabler/icons-react";
import {toast} from "react-hot-toast";
import {useSearchStore} from "~/stores/search";

const FilterModal: FunctionComponent = () => {
    const {setProducts} = useProductStore()
    const {query, setQuery} = useSearchStore()
    const productQuery = api.product.getBySearch.useMutation({
        onError: err => toast.error(err.message),
        onSuccess: setProducts,
    })

    return (
        <TextInput label="Search" size='xl' placeholder="Search..." value={query} icon={<IconSearch size="1.6rem"/>}
                   onChange={e => {
                       e.preventDefault()
                       const q = e.target.value
                       setQuery(q)
                       productQuery.mutate(q)
                   }}/>
    )
};

export default FilterModal;