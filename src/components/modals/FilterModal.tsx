import React from 'react';
import {Group, Radio} from "@mantine/core";

const FilterModal = () => {
    return (
        <div className="flex flex-col justify-start gap-2 relative w-full h-[808px] items-start pl-8">
            <div
                className="whitespace-nowrap text-2xl font-['Montserrat'] font-semibold tracking-[0.72] text-black ml-1 relative">
                Filter BY
            </div>
            <div
                className="border-solid w-[180px] h-1 shrink-0 mb-1 ml-1 bordert-2 borderb-0 borderblack borderx-0 rounded-sm"/>
            <div
                className="whitespace-nowrap text-xl font-['Montserrat'] font-semibold tracking-[0.66] text-black relative mb-2 ml-1">
                SORT BY
            </div>
            <Radio.Group className='pb-8' size='xl'>
                <Group mt="xs">
                    <Radio value="Latest" label="Latest Arrivals"/>
                    <Radio value="Lowest" label="Lowest Price"/>
                    <Radio value="Highest" label="Highest Price"/>
                </Group>
            </Radio.Group>
            <div className="text-xl font-['Montserrat'] font-semibold tracking-[0.66] text-black relative mb-2 ml-1">
                SIZE
            </div>
            <Radio.Group className='pb-8' size='xl'>
                <Group mt="xs">
                    <Radio value="S" label="S (45)"/>
                    <Radio value="XL" label="XL (57)"/>
                    <Radio value="M" label="M (53)"/>
                    <Radio value="L" label="L (48)"/>
                    <Radio value="3XL" label="3XL (49)"/>
                </Group>
            </Radio.Group>
            <div className="text-xl font-['Montserrat'] font-semibold tracking-[0.66] text-black ml-1 relative">
                PRICE
            </div>
            <Radio.Group className='pb-8' size='xl'>
                <Group mt="xs">
                    <Radio value="0-599" label="- ₹599"/>
                    <Radio value="599-999" label="₹599 - ₹999"/>
                    <Radio value="999-1999" label="₹999 - ₹1999"/>
                    <Radio value="1999-2999" label="₹1999 - ₹2999"/>
                    <Radio value="2999-2999" label="₹2999 - ₹3999"/>
                    <Radio value="3999-4999" label="₹3999 - ₹4999"/>
                    <Radio value="4999-" label="₹4999+"/>
                </Group>
            </Radio.Group>=
        </div>
    );
};

export default FilterModal;