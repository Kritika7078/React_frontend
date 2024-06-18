import { SuperAdminNavbar } from "./SuperAdminNavbar"
import { SuperAdminBody } from "./SuperAdminBody"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'

export const SuperAdmin=()=>{
    return(
        <div>
            <SuperAdminNavbar/>
            <SuperAdminBody/>
        </div>  
    )
}