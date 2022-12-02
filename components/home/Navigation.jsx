import { Link, Route, Routes } from "react-router-dom"
import Counter from "./Counter"

const Navigation = () => <nav>
    <ul>
        <li><Link to ='/home'>Home</Link> </li> 
        <li><Link to ='/counter'>Counter</Link> </li>
        <li><Link to ='/todos'>Todos</Link></li>
    </ul>
    
    </nav>  
    

export default Navigation
