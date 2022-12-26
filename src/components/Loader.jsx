import {loader, loaderBar} from '../assets';


const Loader = ({title}) => (
  <div className='w-full flex flex-col justify-center items-center'>
    {/* <img src={loader}></img> */}
    <img src={loaderBar} className="text-slate-900"></img>
    <h1>{ title || "loading..."}</h1> 
  </div>
);

export default Loader;
