import LeftView from '@/Components/BlogView/LeftView';
import RightView from '@/Components/BlogView/RightView';
import React from 'react';

const page = () => {
    
    return (
        <div className='grid grid-cols-4 justify-between w-[85%] mx-auto'>
            <LeftView></LeftView>
            <RightView></RightView>
        </div>
    );
};

export default page;