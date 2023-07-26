import React from 'react';
import {Group, Radio} from "@mantine/core";

const FilterModal = () => {
    return (
        <div className="flex flex-col justify-start gap-2 relative w-full h-[808px] items-start pl-8">
            <div className="whitespace-nowrap text-2xl font-['Montserrat'] font-semibold tracking-[0.72] text-black ml-1 relative">
                Filter BY
            </div>
            <div className="border-solid w-[180px] h-1 shrink-0 mb-1 ml-1 bordert-2 borderb-0 borderblack borderx-0 rounded-sm" />
            <div className="whitespace-nowrap text-xl font-['Montserrat'] font-semibold tracking-[0.66] text-black relative mb-2 ml-1">
                SORT BY
            </div>
            <Radio.Group className='pb-8'>
                <Group mt="xs">
                    <Radio value="react" label="Latest Arrivals" />
                    <Radio value="svelte" label="Lowest Price" />
                    <Radio value="ng" label="Highest Price" />
                </Group>
            </Radio.Group>
            <div className="text-xl font-['Montserrat'] font-semibold tracking-[0.66] text-black relative mb-2 ml-1">
                SIZE
            </div>
            <div className='flex flex-col justify-start space-y-2'>
                <div className="flex flex-row justify-start gap-2">
                    <div className="border-solid border-[#608fa3] bg-[#608fa2] relative w-6 shrink-0 h-6 mb-px mr-1 border-2" />
                    <div className="whitespace-nowrap text-lg font-['Montserrat'] font-medium tracking-[0.54] text-black relative">
                        S (45)
                    </div>
                    <div className="border-solid border-[#608fa3] bg-[#608fa2] mr-1 relative w-6 shrink-0 h-6 border-2" />
                    <div className="whitespace-nowrap text-lg font-['Montserrat'] font-medium tracking-[0.54] text-black relative">
                        XL (57)
                    </div>
                </div>
                <div className="flex flex-row justify-start gap-2">
                    <div className="border-solid border-[#608fa3] bg-[#608fa2] relative w-6 shrink-0 h-6 mb-px mr-1 border-2" />
                    <div className="whitespace-nowrap text-lg font-['Montserrat'] font-medium tracking-[0.54] text-black relative">
                        M (53)
                    </div>
                    <div className="border-solid border-[#608fa3] bg-[#608fa2] mr-1 relative w-6 shrink-0 h-6 border-2" />
                    <div className="whitespace-nowrap text-lg font-['Montserrat'] font-medium tracking-[0.54] text-black relative">
                        XXL (47)
                    </div>
                </div>
                <div className="flex flex-row justify-start mb-2 gap-2">
                    <div className="border-solid border-[#608fa3] bg-[#608fa2] relative w-6 shrink-0 h-6 mb-px mr-1 border-2" />
                    <div className="whitespace-nowrap text-lg font-['Montserrat'] font-medium tracking-[0.54] text-black relative">
                        L (48)
                    </div>
                    <div className="border-solid border-[#608fa3] bg-[#608fa2] mr-1 relative w-6 shrink-0 h-6 border-2" />
                    <div className="whitespace-nowrap text-lg font-['Montserrat'] font-medium tracking-[0.54] text-black relative">
                        3XL (49)
                    </div>
                </div>
            </div>
            <div className="text-xl font-['Montserrat'] font-semibold tracking-[0.66] text-black ml-1 relative">
                PRICE
            </div>
            <div className="flex flex-row justify-start gap-3 relative items-center mb-px ml-1">
                <div className="border-solid border-[#608fa3] bg-[#608fa2] relative w-6 shrink-0 h-6 border-2" />
                <div className="whitespace-nowrap text-xl font-['Montserrat'] font-medium tracking-[0.6] text-black relative">
                    ₹599 - ₹999
                </div>
            </div>
            <div className="flex flex-row justify-start gap-3 relative items-center mb-px ml-1">
                <div className="border-solid border-[#608fa3] bg-[#608fa2] relative w-6 shrink-0 h-6 border-2" />
                <div className="whitespace-nowrap text-xl font-['Montserrat'] font-medium tracking-[0.6] text-black relative">
                    ₹999 - ₹1999
                </div>
            </div>
            <div className="flex flex-row justify-start gap-3 relative items-center mb-px ml-1">
                <div className="border-solid border-[#608fa3] bg-[#608fa2] relative w-6 shrink-0 h-6 border-2" />
                <div className="whitespace-nowrap text-xl font-['Montserrat'] font-medium tracking-[0.6] text-black relative">
                    ₹1999 - ₹2999
                </div>
            </div>
            <div className="flex flex-row justify-start gap-3 relative items-center mb-px ml-1">
                <div className="border-solid border-[#608fa3] bg-[#608fa2] relative w-6 shrink-0 h-6 border-2" />
                <div className="whitespace-nowrap text-xl font-['Montserrat'] font-medium tracking-[0.6] text-black relative">
                    ₹2999 - ₹3999
                </div>
            </div>
            <div className="flex flex-row justify-start gap-3 relative items-center mb-10 ml-1">
                <div className="border-solid border-[#608fa3] bg-[#608fa2] relative w-6 shrink-0 h-6 border-2" />
                <div className="whitespace-nowrap text-xl font-['Montserrat'] font-medium tracking-[0.6] text-black relative">
                    ₹3999 - ₹4999
                </div>
            </div>
            <div className="bg-[#264653] self-center flex flex-col justify-center relative h-12 shrink-0 items-center rounded-[26px]">
                <div className="whitespace-nowrap text-lg font-['Montserrat'] font-bold tracking-[0.54] text-white relative mx-10">
                    SHOW MORE
                </div>
            </div>
        </div>
    );
};

export default FilterModal;