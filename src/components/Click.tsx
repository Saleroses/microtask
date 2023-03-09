import React from 'react';

type Props = {
    name: string,
    callBack: () => void
}

const Click = (props: Props) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default Click;