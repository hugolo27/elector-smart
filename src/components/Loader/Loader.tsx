import React from "react";
import { Loader } from 'semantic-ui-react'
import "./Loader.scss";

const EsmartLoader = () => {
    return (<div className={'loader__background__'}>
        <Loader className={'loader__foreground__'} size={'huge'} active inline={'centered'} />
    </div>)
}

export default EsmartLoader;