
const DataDisplayComponent =(props)=>{
    console.log(props)
    const {userData} =props;
    return userData.map((user,index)=>{
    console.log(userData.length)
            return <div key={index+1} id={index+1}>
                 <p>userID :{user.id}</p>  
                <p> Title :{user.title}</p> 
                 </div>
        }
    
    )

}


export default DataDisplayComponent