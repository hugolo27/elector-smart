import { useNavigate } from 'react-router-dom';
import React from "react";

// eslint-disable-next-line react/display-name
const Navigator = (Component: any) => (props: any) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
};

export default Navigator;