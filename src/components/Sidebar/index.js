import Button from '@mui/material/Button';
import { GrDashboard } from "react-icons/gr";
import { LiaBriefcaseSolid } from "react-icons/lia";
import { TbActivityHeartbeat } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaRegHandRock } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";





const Sidebar= ()=>{
    return(
        <>
      <div className="sidebar">
<ul>
  <li>
    <Button className='w-100'>
        <span className='icon'><GrDashboard /></span>
        Dashboard
        <span className='arrow'></span>
    </Button>
</li>
<li>
    <Button className='w-100'>
        <span className='icon'><LiaBriefcaseSolid  /></span>
       My Cases
        <span className='arrow'><FaAngleRight />
        </span>
    </Button>
</li>
<li>
    <Button className='w-100'>
        <span className='icon'><TbActivityHeartbeat />        </span>
       Activities
        <span className='arrow'><FaAngleRight />
        </span>
    </Button>
</li>
<li>
    <Button className='w-100'>
        <span className='icon'><SlCalender />        </span>
     Calender
        <span className='arrow'><FaAngleRight />
        </span>
    </Button>
</li>
<li>
    <Button className='w-100'>
        <span className='icon'><LuFileSpreadsheet />
        </span>
    Files
        <span className='arrow'><FaAngleRight />
        </span>
    </Button>
</li>
<li>
    <Button className='w-100'>
        <span className='icon'><FaRegHandRock />        </span>
   Open a Dispute
        <span className='arrow'><FaAngleRight />
</span>
    </Button>
</li>
</ul>


      </div>

        </>

       
    )
}
export default Sidebar;