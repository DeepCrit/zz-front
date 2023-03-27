import { GiMoebiusTriangle } from 'react-icons/gi';

function NavBar() {
  return (
    <div className="bg-black h-11 text-white flex justify-between items-center absolute top-0 w-screen">
        <div className="flex">
            <a href="." className='px-3'><GiMoebiusTriangle/></a>
            <p className="tracking-wide font-bold pl-2 font-link">Testa uzdevums</p>
        </div>
        <div className="flex ">
            <div className="border-2 border-solid  border-white rounded-full w-8 h-8"></div>
            <div className="pl-3 pr-5">
                <p className="tracking-widest font-link">Aivars Rudens</p>
                <small className="text-xs font-link">"ZZ Dats" praktikants</small>
            </div>
        </div>
    </div>
  );
}

export default NavBar;
