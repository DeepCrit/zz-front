import Content from "./Content";
import LeftMenu from "./LeftMenu";
import NavBar from "./NavBar";

function Layout() {
    return (
      <div className=" h-screen w-screen grid grid-cols-12 bg-slate-200">
            <div className="col-span-2" >
                <NavBar />
                <LeftMenu />
            </div>
            <div className="col-span-10 ">
                <Content />
            </div>
      </div>
    );
  }
  
  export default Layout;
  