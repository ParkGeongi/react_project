import { Route, Routes } from "react-router-dom"
import { SignUp,LoginForm } from "auth"

import {Counter, Footer, Navigation} from "common"
import { Schedule } from "todos"
import dog from '../../images/dog.png'


const Home = () => {
    return (<>       
    <table style={{ width: "1200px", height: "550px", margin: "0 auto", border: "1px solid black"}}>
        <thead>
            <tr columns="3" >
                <td style={{ width: "100%", border: "1px solid black"}}>
                <img src = {dog} alt = 'dog'></img>
                <h3><Navigation/></h3>
                
                    </td>
            </tr>
        </thead>
        <tbody>
        <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
        <td style={{ width: "100%", border: "1px solid black"}}>
         <Routes>   
            <Route path="/counter" element={<Counter/>}></Route>
            <Route path="/todos" element={<Schedule/>}></Route>
            <Route path="/login" element={<LoginForm/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
        
        </Routes>
        </td>
        </tr>
        <tr style={{ width: "100%", height: "20%", border: "1px solid black"}}>
            <td style={{ width: "100%", border: "1px solid black"}}>
                <Footer/> 
                
            </td>
        </tr>
        </tbody>
    </table>
    </>
    )
}

export default Home