import { useNavigate } from 'react-router-dom';
import React from "react";

// eslint-disable-next-line react/display-name
const Navigator = (Component: any) => (props: any) => {
    const navigate = useNavigate();
    const navigateToPath = (path: string) => navigate(path);
    return <Component {...props} navigate={navigateToPath} />;
};

export default Navigator;