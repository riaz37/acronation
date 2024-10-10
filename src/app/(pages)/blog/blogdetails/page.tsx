import LeftView from '@/Components/BlogView/LeftView';
import RightView from '@/Components/BlogView/RightView';
import React from 'react';

const page = () => {
    
    return (
        <div className='grid grid-cols-3 gap-10 justify-between w-[85%] mx-auto mt-16'>
            <LeftView></LeftView>
            <RightView></RightView>
        </div>
    );
};

export default page;