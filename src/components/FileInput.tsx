import {type FunctionComponent, useState} from 'react';
import {toast} from "react-hot-toast";
import {Button, Group, rem, Text, useMantineTheme} from '@mantine/core';
import {IconPhoto, IconUpload, IconX} from '@tabler/icons-react';
import {Dropzone, type DropzoneProps, type FileWithPath, MIME_TYPES} from '@mantine/dropzone';
import Image from "next/image";
import {useUploadThing} from "~/utils/uploadthing";

type ExtraProps = {
    onUploadComplete?: (res?: { fileUrl: string; fileKey: string; }[]) => void
}

type Props = Partial<DropzoneProps> & ExtraProps

const FileInput: FunctionComponent<Props> = (props) => {
    const {onUploadComplete, loading} = props
    const theme = useMantineTheme();
    const [files, setFiles] = useState<FileWithPath[]>([])
    const {isUploading, startUpload} = useUploadThing('imageUploader', {
        onUploadError: err => toast.error(err.message),
        onClientUploadComplete: (res) => {
            if (onUploadComplete) onUploadComplete(res)
        }
    })

    return <div className='flex flex-col space-y-4'>
        <Dropzone {...props} loading={isUploading || loading} onDrop={setFiles} maxFiles={1}
                  accept={[MIME_TYPES.png, MIME_TYPES.jpeg]}>
            <Group position="center" spacing="xl" style={{minHeight: rem(220), pointerEvents: 'none'}}>
                <Dropzone.Accept>
                    <IconUpload
                        size="3.2rem"
                        stroke={1.5}
                        color={theme.colors[theme.primaryColor]![theme.colorScheme === 'dark' ? 4 : 6]}
                    />
                </Dropzone.Accept>
                <Dropzone.Reject>
                    <IconX
                        size="3.2rem"
                        stroke={1.5}
                        color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
                    />
                </Dropzone.Reject>
                <Dropzone.Idle>
                    {
                        !files && <IconPhoto size="3.2rem" stroke={1.5}/>
                    }
                    {
                        files && files.map(file => (
                            <div key={file.path}
                                 className='flex flex-row items-center justify-start py-2 px-4 border-dotted border-2 border-gray-300 my-2 rounded-lg'>
                                <Image src={URL.createObjectURL(file)} alt='' width={64} height={64}/>
                                <h2 className='mx-4'>{file.name}</h2>
                                {/*<div className='text-red-600 bg-gray-200 p-4 rounded-md hover:bg-purple-400 pointer-events-none' onClick={e=>{*/}
                                {/*    e.stopPropagation()*/}
                                {/*}}>*/}
                                {/*    <IconX/>*/}
                                {/*</div>*/}
                            </div>
                        ))
                    }
                </Dropzone.Idle>

                <div className='flex flex-col space-y-2'>
                    <Text size="xl" inline>
                        Drag images here or click to select files
                    </Text>
                    <Text size="sm" color="dimmed" inline mt={7} className='text-center'>
                        Attach as many files as you like
                    </Text>
                </div>
            </Group>
        </Dropzone>
        <Button disabled={files.length == 0} onClick={() => void startUpload(files)} variant='subtle'
                loading={isUploading || loading}>Upload</Button>
    </div>
}

export default FileInput;