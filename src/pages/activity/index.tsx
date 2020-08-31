import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import './index.scss';

const Activity: React.FC = (props:any) => {
    // const history = useHistory();
    const { history } = props

    useEffect(() => {
        console.log(props.history.length, props.history.action )
    }, [])

    return <div>
        {JSON.stringify(props.location)}
        <br/>
        {location.href}
        <br/>
        Activity
    </div>
}

export default Activity;