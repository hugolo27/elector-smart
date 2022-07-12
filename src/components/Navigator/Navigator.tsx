/* eslint-disable */

import { useNavigate } from 'react-router-dom';
import React from "react";

const Navigator = (Component: any) => (props: any) => {
    const navigate = useNavigate();
    const navigateToPath = (path: string) => navigate(path);
    return <Component {...props} navigate={navigateToPath} />;
};

export default Navigator;