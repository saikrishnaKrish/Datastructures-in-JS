import React from 'react'
import { useState } from 'react'
import DataDisplayComponent from './DataDisplayComp';
import IuseEffectHook from './IuseEffectHook';

const IuseStateHook = () => { // arrow functions (ES6 way of writing the component)
    //useState is a hook
    //Hooks are reuable functions.
    //they are two types of hooks
    //1.pre-defined Hooks
    //2.Custom Hooks
    const [count, setCount] = useState(1001);
    const [userData,setUserData] =useState([
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        },
        {
          "userId": 1,
          "id": 6,
          "title": "qui ullam ratione quibusdam voluptatem quia omnis",
          "completed": false
        },
        {
          "userId": 1,
          "id": 7,
          "title": "illo expedita consequatur quia in",
          "completed": false
        },
        {
          "userId": 1,
          "id": 8,
          "title": "quo adipisci enim quam ut ab",
          "completed": true
        },
        {
          "userId": 1,
          "id": 9,
          "title": "molestiae perspiciatis ipsa",
          "completed": false
        },
        {
          "userId": 1,
          "id": 10,
          "title": "illo est ratione doloremque quia maiores aut",
          "completed": true
        },
        {
          "userId": 1,
          "id": 11,
          "title": "vero rerum temporibus dolor",
          "completed": true
        },
        {
          "userId": 1,
          "id": 12,
          "title": "ipsa repellendus fugit nisi",
          "completed": true
        },
        {
          "userId": 1,
          "id": 13,
          "title": "et doloremque nulla",
          "completed": false
        },
        {
          "userId": 1,
          "id": 14,
          "title": "repellendus sunt dolores architecto voluptatum",
          "completed": true
        },
        {
          "userId": 1,
          "id": 15,
          "title": "ab voluptatum amet voluptas",
          "completed": true
        },
        {
          "userId": 1,
          "id": 16,
          "title": "accusamus eos facilis sint et aut voluptatem",
          "completed": true
        },
        {
          "userId": 1,
          "id": 17,
          "title": "quo laboriosam deleniti aut qui",
          "completed": true
        },
        {
          "userId": 1,
          "id": 18,
          "title": "dolorum est consequatur ea mollitia in culpa",
          "completed": false
        },
        {
          "userId": 1,
          "id": 19,
          "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
          "completed": true
        },
        {
          "userId": 1,
          "id": 20,
          "title": "ullam nobis libero sapiente ad optio sint",
          "completed": true
        },
        {
          "userId": 2,
          "id": 21,
          "title": "suscipit repellat esse quibusdam voluptatem incidunt",
          "completed": false
        },
        {
          "userId": 2,
          "id": 22,
          "title": "distinctio vitae autem nihil ut molestias quo",
          "completed": true
        },
        {
          "userId": 2,
          "id": 23,
          "title": "et itaque necessitatibus maxime molestiae qui quas velit",
          "completed": false
        },
        {
          "userId": 2,
          "id": 24,
          "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
          "completed": false
        },
        {
          "userId": 2,
          "id": 25,
          "title": "voluptas quo tenetur perspiciatis explicabo natus",
          "completed": true
        }])
    const [isOnline,setIsOnline]= useState(false);
          console.log(isOnline)
    //get //set
    console.log("rendered");
    const handleInc = () => {
        setCount((count) => count + 1)
        // setCount(count+1) 
    }
    //action handlers
    const handleDec = () => {
        setCount((count) => count - 1)  // setting the state     
    }

    return (
        <div>
            <h2>  IuseStateHook</h2>
            <p> Count : {count}</p>
            <button onClick={handleInc}>Increment (+)</button> {/* //caling the functions */}
            <button onClick={handleDec}>Decrement (-)</button>``
             <button onClick={() => setCount(count + 1000)}>Increment By 1000</button>
            {/* conditional rendering */}
            {/* {
              userData.length > 25 ? 
              <DataDisplayComponent userData={userData}/> 
              : "Don't have enough list to display"
            } */}
      
            {/* {
              userData.length > 24 && 
              <DataDisplayComponent userData={userData}/> 
            } */}
                <br/>
                UserStatus : 
                {isOnline
                  ? "Available"
                  :"Offline"
                }

              <br/> 
              <button onClick={()=>setIsOnline(!isOnline)}>
                ChangeStatus</button>    
              <br/>

            
           {/* if(userData.length>25 ){

              <DataDisplayComponent userData={userData}/> 
            }else{
              "Don't have enough list to display"

            } */}
            
            {/* Child Component passing props */}
            
         <IuseEffectHook/>
             
        </div>
    )
}

export default IuseStateHook

