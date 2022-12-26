const MVCard = () => (
  <div  >
    <div className="w-full rounded-md  ">
      <iframe
      className="rounded-md"
        width="fit"
        height="fit"
        src="https://www.youtube-nocookie.com/embed/CVw7iulcI98"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div className="px-1">
        <div className="text-lg font-medium  w-[90%] inline-block truncate  cursor-pointer">Die for You</div>
        <div  className="text-[#8792a2] text-sm  cursor-pointer">The weeknd</div>
    </div>
  </div>
);

export default MVCard;
