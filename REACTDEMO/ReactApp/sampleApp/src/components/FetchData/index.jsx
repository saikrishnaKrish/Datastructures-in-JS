import { useEffect, useState } from "react";

const useFetchData =(initalUrl,initialState)=>{
 
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [data,setData] = useState(initialState);

    async function MakeApiCall() {
        try {
            setIsLoading(true) 
            let data = await fetch(initalUrl);
            data = await data.json()
            // console.log(data)
            setData(data)
            setIsLoading(false)
        }
        catch (err) {
            setError(err.message)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        MakeApiCall()
        console.log("I have been rendered!!!")
    }, [initalUrl])


    return  {
            error,
            isLoading,
            data
        }
}


export default useFetchData