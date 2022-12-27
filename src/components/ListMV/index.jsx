import MVCard from "./MVCard";

const ListMV = () => (
    <div className="w-full mt-4">
    {/* title */}
    <div className="flex justify-between items-center ">
      <div className="text-2xl font-bold mb-2">Popular Video</div>
      <div className="text-[#8792a2] text-lg cursor-pointer hover:underline">
        show all
      </div>
    </div>
    {/* card */}
    <div className="flex justify-around gap-4 flex-wrap ">
      <MVCard />
      <MVCard/>
      <MVCard/>
      <MVCard/> 
      <MVCard/>
      <MVCard/>
    </div>
    </div>
  );
  
  export default ListMV;