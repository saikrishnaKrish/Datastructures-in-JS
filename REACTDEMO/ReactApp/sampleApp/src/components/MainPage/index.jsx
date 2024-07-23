import { useEffect, useState } from "react"
import ProdcutsDataComp from "../../hooks/ProductsDataComp";
import useFetchData from "../FetchData";
import './index.css'

let feedbackFrom={
    rstName:"",
    userName:"",
    userfdbck:"",
    userCount:1
}
const MainComp = () => {
    const [active, setIsActive] = useState(true);
    const [feedbackFrm,setFeedbackFrm] =useState(feedbackFrom);
    // const [prodcutsData, setProductsData] = useState([]);
    // const [error, setError] = useState("");
    // const [isLoading, setIsLoading] = useState(false);
    const {error,isLoading,data:prodcutsData} = useFetchData("http://fakestoreapi.com/products",[]) //custom hook
    // console.log(fetchedData)
    // async function MakeApiCall() {
    //     try {
    //         setIsLoading(true)
    //         let data = await fetch("http://fakestoreapi.com/products");
    //         data = await data.json()
    //         console.log(data)
    //         setProductsData(data)
    //         setIsLoading(false)
    //     }
    //     catch (err) {
    //         setError(err.message)
    //         setIsLoading(false)
    //     }
    // }
    // useEffect(() => {
    //     MakeApiCall()
    //     console.log("I have been rendered!!!")
    // }, [])

    const handleSubmit=(event)=>{
        console.log(event)
         event.preventDefault()
        console.log("from handle Submit")
        console.log("Form Submitted")
        console.log(feedbackFrm)//
        setFeedbackFrm(feedbackFrom)// resetting the values
    }

        
    const handleInputChange =(event)=>{
        console.log(event)
        console.log("name",event.target.name)
        console.log("value",event.target.value)
        let fname= event.target.name
        let value = event.target.value
        setFeedbackFrm((prev)=>({...prev,[fname]:value}))

    }

    return <div style={{

        background: "#607f60",
        borderRadius: "24px",
        padding: "10px",
        margin: "20px"
    }}>
        <p>Main Component</p>
      <p>{JSON.stringify(feedbackFrm)}</p>  
      <h1>
      {
            active ? "User is available" : "user is not available"
        }
        </h1> 
        {
            isLoading && <p>Loading..............</p>
        }

            <br/>   
        <button onClick={() => setIsActive(!active)}>
            ChangeContent </button>
        
        {
            error.length>0 && <p>
                Unable to load Data {error}
            </p>
        }
        <div>
            <form>
                         <h1>Feedback Form</h1>
                            <fieldset>
                            <label className="fdlLabel">
                            Name of the Restaurant:
                            </label>
                            <input  type="text"  
                            name="rstName" 
                            className="fdlInp" 
                            placeholder="Restaurant Name" value={feedbackFrm.rstName}
                             onChange={handleInputChange}/>
                            </fieldset>

                            <fieldset>
                            <label className="fdlLabel">
                            Name of the Person:
                            </label>
                            <input  type="text"  name="userName" className="fdlInp" 
                            placeholder="Enter your Name" value={feedbackFrm.userName} 
                            onChange={handleInputChange}/>
                            </fieldset>
                            <fieldset>
                            <label className="fdlLabel">
                                Enter the feedback
                            </label>
                            <textarea  type="textarea" name="userfdbck" className="fdlInp" placeholder="Enter your feedback" value={feedbackFrm.userfdbck} onChange={handleInputChange}/>
                            </fieldset>
                            <label className="fdlLabel">
                                Enter the no of people
                            </label>
                            <select name="select no of people" id="fdlCount"  onChange={handleInputChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                             </select>
                            <button onClick={(e)=>handleSubmit(e)}> Submit form </button>
                                
            </form>
                                  

        </div>

        {/* Passing data from parent to child component as props*/}
        {prodcutsData.length > 0 &&
            <ProdcutsDataComp pData={prodcutsData} active={active} />
        }
    </div>

}


export default MainComp