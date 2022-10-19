import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react"

const Form =() =>{
   const [name,setName]=useState('')
   const[LastName ,setLastNAME]=useState ('');
   
    const handleSubmit =(e) =>{e.preventDefault()
    
    console.log({name,LastName})}
    const handleChangeName=(e)=> {
    setName(e.target.value);

    }
    const handleChangeLastName =(e) =>{
    setLastNAME(e.target.value);
    }
    const handleMouseMove=(e) =>{
console.log(e.clienteX,e.clienteY);
    }
    useEffect(() => {
    window.addEventListener('mousemove',handleMouseMove)
    return ()=> {
        window.removeEventListener ('mousemove' , handleMouseMove)
    }
    })
    return(
        <div style={{minHeight:'70vh',discplay:'flex',justifyContent:'center',alignItems:'center',}}>
            <form onSubmit={handleSubmit} action="">
                <button onClick={click}>click!</button>
                <input type="text" name="nombre" onChange={handleChangeName} value={name}/>
                <input type="text" name ="apellido" onChange={handleChangeLastName} value={LastName}/>
                <button>enviar</button>
            </form>

        </div>
    )
}
export default Form