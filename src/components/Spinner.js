import React, {useEffect, useState} from "react";
import { ScaleLoader } from "react-spinners";

const Spinner = () => {

    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 2000)
    }, [])

    return (
        <>
        <ScaleLoader  color={'black'} loading={loading} size={60} id="spinner"  />
        </>
    );
}

export default Spinner;