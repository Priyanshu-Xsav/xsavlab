import { FC } from 'react';

interface QuotesProps {
  color?: string;
  size?: string;
}

const Quotes: FC<QuotesProps> = ({ color = 'currentcolor', size = '28px' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" transform="scale(-1, 1)" x="-448" fill={color} width={size} >
        <path d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z"/>
    </svg>

  );
}

export default Quotes;