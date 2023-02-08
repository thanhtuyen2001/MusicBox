import NewSongCard from "./NewSongCard";

const lstNewSongs = [
  {src:'https://images.unsplash.com/photo-1639075362057-432406416acc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyYXppbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60', name: 'Its you' ,singer: "Ali Gatie", rank: '1', time:'21-03-2022'},
  {src:'https://images.unsplash.com/photo-1581640465190-5bf5aeca47ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJyYXppbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60', name: 'Die for you',singer: "Joji", rank: '2', time:'21-02-2022'},
  {src:'https://images.unsplash.com/photo-1627697296296-18810d90f298?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhemlsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60', name: 'Tche Tche',singer: "Neymar", rank: '3', time:'20-02-2022'}
];

const NewSong = () => (
    <div>
 {/* title */}
 <div className="flex justify-between items-center w-full mt-4">
      <div className="text-2xl font-bold mb-2">New song</div>
      <div className="text-[#8792a2] text-lg cursor-pointer hover:underline">
        show all
      </div>
    </div>
    <div className="flex gap-4  justify-start md:justify-between">
      {
        lstNewSongs.map((item, i) => {
          console.log('item:', item)
          return (
          <NewSongCard item={item} key={i}/>
        )})
      }
      {/* <NewSongCard/>
      <NewSongCard/>
      <NewSongCard/> */}
    </div>
    </div>
  );
  
  export default NewSong;
  