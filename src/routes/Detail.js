import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
    const location = useLocation();
    const navigate = useNavigate();
    
    React.useEffect(() => {
        if (location.state === null) {
            navigate('/');
        }
    });

    if (location.state) {
        const { title } = location.state;
        return <span>{title}</span>;
    } else {
        return null;
    }
}

export default Detail;