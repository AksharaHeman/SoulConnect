import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
  const navigate=useNavigate()
  return (
    <div className="flex w-screen fixed top-0 left-0 justify-between md:h-24 shadow">
        <div className="sm:pl-4 md:pl-32 py-2 flex items-center">        
            <img width="80px" src="https://t4.ftcdn.net/jpg/00/67/50/13/360_F_67501304_O7rJqtBrbN3NTA1RO5g34c5KiErLMlDa.jpg" alt="" />
            <p className="italic font-extrabold text-lg md:text-2xl text-orange-500 ml-4">SoulConnect Matrimony</p>
            
        </div>
        <div className="flex justify-center md:justify-end items-center py-4 md:py-0 pr-4 md:pr-32">
            <p className="font-bold text-center md:text-left">Already a member ? <button onClick={()=>navigate(`/login`)} className="ml-2 px-4 py-1 border border-orange-600 rounded-2xl text-orange-500">LOGIN</button></p>
        </div>
    </div>
  );
};
export default HeaderSection;
