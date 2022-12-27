import { Link } from "react-router-dom";

const MVCard = () => (
  <div className="w-[250px]">
    <div className="w-full rounded-md overflow-hidden ">
      <iframe
        className="rounded-md w-full h-auto"
        width=""
        height=""
        src="https://www.youtube-nocookie.com/embed/oZ2hR-Jjsnk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div className="flex flex-col px-2">
      <div className="text-base font-medium  w-[90%] inline-block truncate  cursor-pointer hover:border-b">
        <Link to="/mv">Viva la Vida</Link>
      </div>
      <div className="text-[#8792a2] text-sm  cursor-pointer">Coldplay</div>
    </div>
  </div>
);

export default MVCard;
