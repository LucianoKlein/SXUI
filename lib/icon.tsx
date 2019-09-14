import React from 'react';
import '../icons/wechat.svg';
import '../icons/Facebook.svg';
import '../icons/paypal.svg';

interface IconProps {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>
            <svg>
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>
    )
};

export default Icon;
