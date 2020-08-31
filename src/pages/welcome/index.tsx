import React, { useEffect } from 'react';
// import './index.scss';

const Welcome: React.FC = (props: any) => {
    const { history } = props;

    useEffect(() => {
        console.log(props.history)
    }, [])

    const handleClick = () => {
        history.push({ pathname: '/pages/activity/index' })
    }

    return <div>
        {JSON.stringify(props.location)}
        <br />
        {location.href}
        <br />

        Welcome
        <br />

        <button onClick={handleClick}>点击</button>
    </div>
}

export default Welcome;