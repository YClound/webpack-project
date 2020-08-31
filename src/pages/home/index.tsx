import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import './index.scss';

const Home: React.FC = (props: any) => {
    // const history = useHistory();
    const { history } = props

    useEffect(() => {
        console.log(props.history.length, props.history.action)
        setTimeout(() => {
            history.push('/pages/welcome/index')
            // location.href = '/pages/welcome/index';
        }, 2000)
    }, [])

    return <div>
        {JSON.stringify(props.location)}
        <br />
        {location.href}
        <br />
        home
    </div>
}

export default Home;