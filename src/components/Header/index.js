import { Link } from "react-router-dom";
import logo from '../../assests/images/logo.webp';
import Button from '@mui/material/Button';
import { CiBellOn } from "react-icons/ci";
import { FiUser } from "react-icons/fi";





const Header = () => {
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row  align-items-center">
            <div className="col-xs-3">
              <Link to={'/'}>
                <img src={logo} alt="Logo" style={{ width: "100px", height: "auto" }} />
              </Link>
            </div>
            <div className="col-sm-3 d-flex align-items-center justify-content-end part2">
              <Button className="rounded-circle mr-3"><CiBellOn/></Button>
              <Button className="rounded-circle mr-3"><FiUser /></Button>
            </div>
           

          </div>
        </div>
      </header>
    </>
  );
};
export default Header;