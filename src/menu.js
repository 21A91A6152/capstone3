import { Link } from "react-router-dom";
function Menu(){
    return(
        <div>
           <Link to="/calculator">Calculator</Link> |
            <Link to="/products">Products</Link> |
            <Link to="/Profile">Profile</Link> |
            <Link to="/todolist">TodoList</Link> |
            <Link to="/products1">products1</Link>
           

        </div>
    )
}
export default Menu