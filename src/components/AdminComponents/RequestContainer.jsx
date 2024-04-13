import React, { useState } from 'react';
import ShopContainer from './Requests/ShopContainer';
import ChannelContainer from './Requests/ChannelContainer';
import LiveReqContainer from './Requests/LiveReqContainer';

export default function RequestContainer() {
    const [container, setContainer] = useState(1);

    const isSelected = (num) => {
        return container === num ? 'underline font-bold text-lg' : 'text-lg';
    };

    return (
        <div className='w-full bg-gray-300 text-gray-800 my-10 rounded-md shadow-md p-4'>
            <div>
                {/* <span className={`${isSelected(0)} mx-2 cursor-pointer`} onClick={() => setContainer(0)}>Creator</span> */}
                <span className={`${isSelected(1)} mx-2 cursor-pointer font-bold text-lg`} onClick={() => setContainer(1)}>Shop</span>
                <span className={`${isSelected(2)} mx-2 cursor-pointer font-bold text-lg`} onClick={() => setContainer(2)}>Channel</span>
                <span className={`${isSelected(3)} mx-2 cursor-pointer font-bold text-lg`} onClick={() => setContainer(3)}>Lives</span>
            </div>
            {
                container === 1 ? <ShopContainer/> : null
            }
            {
                container === 2 ? <ChannelContainer/> : null
            }
            {
                container === 3 ? <LiveReqContainer/> : null
            }
        </div>
    )
}
