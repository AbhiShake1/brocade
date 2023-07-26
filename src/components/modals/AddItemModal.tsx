import {toast} from "react-hot-toast";
import React, {useState} from "react";
import {api} from "~/utils/api";
import {Button, Input} from "@mantine/core";
import FileInput from "~/components/FileInput";
import type {Product} from "@prisma/client";

interface Props {
    onPost: (item: Product & { isFavourite: boolean }) => void
}

const AddItemModal: React.FC<Props> = ({onPost}) => {
    const [urls, setUrls] = useState<string[]>([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState<string | undefined>()
    const [category, setCategory] = useState<string>('')
    const [price, setPrice] = useState(0)

    const createProductMutation = api.product.create.useMutation({
        onSuccess: onPost,
        onError: err => toast.error(err.message)
    })

    const onClick = () => {
        if (!name) return toast.error('Title is required')
        if (!price) return toast.error('Budget is required')
        if (!description) return toast.error('Description is required')
        if (urls.length == 0) return toast.error('Please upload files before posting')
        void createProductMutation.mutate({
            data: {
                imageUrl: urls[0]!,
                description,
                price,
                name,
                category,
            }
        })
    }

    return (
        <div className="flex flex-col items-center justify-between p-8">
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    onClick()
                }} className='flex flex-col space-y-4'>
                    <Input.Wrapper label='Title'>
                        <Input placeholder='Title' onChange={e => setName(e.target.value)}/>
                    </Input.Wrapper>
                    <Input.Wrapper label='Description'>
                        <Input placeholder='Description' onChange={e => {
                            if (e) setDescription(e.target.value)
                        }}/>
                    </Input.Wrapper>
                    <Input.Wrapper label='Price'>
                        <Input placeholder='Price' type='number' onChange={e => setPrice(parseInt(e.target.value))}/>
                    </Input.Wrapper>
                    <Input.Wrapper label='Category'>
                        <Input placeholder='Category' onChange={e => setCategory(e.target.value)}/>
                    </Input.Wrapper>
                    <div className='pb-8'>
                        <FileInput onUploadComplete={res => setUrls(res?.map(r => r.fileUrl) ?? [])}/>
                    </div>
                    <Button
                        className='mt-8'
                        variant='outline'
                        type='submit' loading={createProductMutation.isLoading}>Post</Button>
                </form>
            </div>
        </div>
    );
}

export default AddItemModal