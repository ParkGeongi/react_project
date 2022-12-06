import { Route, Routes } from "react-router-dom"
import { Login, SignUp } from "auth"
import Schedule from "todos/containers/Schedule"
import Counter from "common/components/Counter"
import Footer from "common/components/Footer"
import Navigation from "common/components/Navigation"







const Home = () => {
    return (<>       
    <table style={{ width: "1200px", height: "550px", margin: "0 auto", border: "1px solid black"}}>
        <thead>
            <tr columns="3" >
                <td style={{ width: "100%", border: "1px solid black"}}><h3>
                <h3><Navigation/></h3>
                    </h3></td>
            </tr>
        </thead>
        <tbody>
        <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
        <td style={{ width: "100%", border: "1px solid black"}}>
         <Routes>   
            <Route path="/counter" element={<Counter/>}></Route>
            /** <Route path="/todos" element={<Schedule/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
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