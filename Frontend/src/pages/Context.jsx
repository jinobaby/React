import React, { useContext, createContext } from 'react'
const Create = createContext();
1
function Context() {
    const name = "Jino"
  return (
    <div>
        <Create value={name}>
            <ChildComponents/>
            <ChildComponents1/>
        </Create>
    </div>
  )
}

function ChildComponents() {
    var name = useContext(Create);

    return(
        <div>
            <h1> {name} </h1>
        </div>
    )
}

function ChildComponents1() {
    var name = useContext(Create);

    return(
        <div>
            <h1> {name} </h1>
        </div>
    )
}

// function B(props){
//     console.log(props);
    
//     return(
//         <div>
//             <h1> {props.data} </h1>
//         </div>
//     )

// }

export default Context