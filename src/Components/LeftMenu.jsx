import { useState } from "react";

function LeftMenu() {

    const [selected] = useState(true);

    return (
      <div className=" pt-11 h-full flex flex-col justify-between bg-white font-link">
          <div className="flex flex-col divide-y-2">
              <button  className="p-3 text-left tracking-widest pl-10 hover:bg-green-200"> Sadaļa 1</button>
              <button className="p-3 text-left tracking-widest pl-10 hover:bg-green-200"> Sadaļa 2</button>
              <button className={selected ? "bg-green-200 p-3 text-left tracking-widest pl-10 hover:bg-green-200" : "p-3 text-left tracking-widest pl-10 hover:bg-green-200"}> Sadaļa 3</button>
          </div >
          <div className="flex flex-col divide-y-2">
            <div></div>
            <button className="p-3 text-left tracking-widest pl-10 hover:bg-green-200"> Sadaļa 4</button>
          </div>
      </div>
    );
  }
  
  export default LeftMenu;