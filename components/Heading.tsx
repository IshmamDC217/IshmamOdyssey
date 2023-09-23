import React, { FC } from 'react';

interface HeadingProps {
  title: string;
}

const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <div className='heading text-[#68513b] text-5xl mb-10 font-bold flex items-center bottom-0 w-4/6 border-b-4 border-[#68513b] ml-4' style={{padding: '10px'}}>{title}
    </div>
  );
}

export default Heading;
