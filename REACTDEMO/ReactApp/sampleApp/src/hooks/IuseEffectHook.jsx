import { useEffect, useState } from "react"
import ProdcutsDataComp from "./ProductsDataComp";

const IuseEffectHook = ()=>{
    const [active,setIsActive]= useState(true);
    const [prodcutsData,setProductsData] =useState([]);
        async function MakeApiCall(){
                let data = await fetch("https://fakestoreapi.com/products");
                data = await data.json()
                console.log(data)
                setProductsData(data)
            }
    useEffect(()=>{
        MakeApiCall()
            console.log("I have been rendered!!!")  
    },[])

    //it helps to connnect or deal with External stores
        // ---> to make the contents in sync
        //If we havent mentioned the dependency array it will be called 
        // on every render
        // If we have an empty, dependency array it will be called only once
        //if we have dependencies inside the array, 
        // it will be called on change in the values of the dependency array


        return <div style={{    background: "#607f60",
            borderRadius: "24px",
            padding: "10px",
            margin: "20px"}}>
        
               <p>Hi Guys! am from IuseEffect Hook</p> 
                {
                        active ? "User is available" :"user is not available"
                }

<button onClick={()=>setIsActive(!active)}>
ChangeContent </button> 
                    {/* {JSON.stringify(prodcutsData)} */} 
                    {/* Passing data from parent to child component as props*/} 
                    {  prodcutsData.length && 
                        <ProdcutsDataComp pData={prodcutsData} active={active}/>
                    }
        
     
            </div>

}


export default IuseEffectHook