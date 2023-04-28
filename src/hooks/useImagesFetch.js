import { useEffect, useState } from "react";

export const useImagesFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
   
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                "X-Parse-Application-Id": `${process.env.REACT_APP_APPLICATION_ID}`,
                "X-Parse-REST-API-Key": `${process.env.REACT_APP_API_KEY}`,
            }
        })
            .then(res => res.json())
            .then(result => {
                setData(Object.values(result));
                setIsLoaded(true);
            })
            .catch(error =>{
                //TODO ERROR
                console.log(error.message);
            })
    }, [url])
    return [data, isLoaded];
}