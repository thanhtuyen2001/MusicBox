import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData, customeStyle}) => (
  <div>
    <div>
      <img alt="art" 
        src={artistId ? artistData?.artists[artistId].attributes?.artwork?.url :
        songData?.images?.coverart }
        className={customeStyle}
      />
    </div>
  </div>
);

export default DetailsHeader;
