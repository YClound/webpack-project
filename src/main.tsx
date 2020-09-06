import React from 'react';

const Main: React.FC = (props) => {
    console.log(props.children)
    return <div>
        {props.children}
    </div>
}

export default Main;