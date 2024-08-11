import React from 'react';





const Section = ({Title,Subtitle}) => {
   
    return (
        <div className='mx-auto w-48 justify-center items-center'>
            <h1 className='text-orange-400 font-bold text-xl'>{Title}</h1>
            <p className=''>{Subtitle}</p>
            
        </div>
    );
};

export default Section;