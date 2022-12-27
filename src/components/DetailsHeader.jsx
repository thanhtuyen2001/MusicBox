import { Link } from "react-router-dom";
import { songCover } from "../assets";
const DetailsHeader = ({ artistId, artistData, songData, customeStyle}) => (
  <div>
    <div>
      <img alt="art" 
        src={artistId ? artistData?.artists[artistId].attributes?.artwork?.url :
        songData?.images?.coverart ? songData?.images?.coverart : songCover }
        className={customeStyle}
      />
    </div>
  </div>
);

export default DetailsHeader;
