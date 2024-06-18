import { UserNavbar } from "./UserNavbar";
import { UserUploads } from "./UserUploads";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'

export const User=()=>{
  return(
    <div>
      <UserNavbar/>
      <UserUploads/>
    </div>
    
  )
}