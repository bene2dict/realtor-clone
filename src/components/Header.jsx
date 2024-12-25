import { Link, useLocation, useNavigate } from "react-router"



const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.pathname);

    function pathMatchRoute (route) {
        if (route === location.pathname) {
            return true;
        }
    }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50 ">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
                <img src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" alt="logo" className="h-5 cursor-pointer" onClick={() => navigate("/")} />
            </div>
            <div>
                <ul className="flex space-x-10">
                    <Link to="/" ><li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${pathMatchRoute("/") ? "text-black border-b-red-500" : "border-b-transparent"}`}> Home</li></Link>

                    <Link to="/offers" ><li  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${pathMatchRoute("/offers") ? "text-black border-b-red-500" : "border-b-transparent"}`}> Offers</li></Link>

                    <Link to="/signin" ><li  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${pathMatchRoute("/signin") ? "text-black border-b-red-500" : "border-b-transparent"}`}> Sign in</li></Link>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header