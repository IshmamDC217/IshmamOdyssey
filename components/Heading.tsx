import React, { FC } from 'react';

interface HeadingProps {
  title: string;
}

const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <div className='heading text-white text-5xl mb-10 font-medium flex items-center'>{title}
    </div>
  );
}

export default Heading;
