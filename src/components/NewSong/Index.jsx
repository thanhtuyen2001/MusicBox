import NewSongCard from "./NewSongCard";

const NewSong = () => (
    <div>
 {/* title */}
 <div className="flex justify-between items-center w-full mt-4">
      <div className="text-2xl font-bold">New song</div>
      <div className="text-[#8792a2] text-lg cursor-pointer hover:underline">
        show all
      </div>
    </div>
    <div className="flex gap-4">
      <NewSongCard/>
      <NewSongCard/>
      <NewSongCard/>
    </div>
    </div>
  );
  
  export default NewSong;
  