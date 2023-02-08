import { BiTimeFive } from 'react-icons/bi'
import  { FaRegCommentDots } from 'react-icons/fa';

const NewsCard = ({ img, title, time, comment, tag }) => (
    <div className="rounded-lg overflow-hidden w-80 m-4 bg-slate-300">
        {/* img  */}
        <div className="relative h-40 overflow-hidden">
            <img src={img} alt="image" className="w-80 " />
            <div className='absolute bottom-3 left-2 text-white rounded-lg bg-teal-500 px-2 py-1'>{tag}</div>
        </div>
        <div className="p-2">
            {/* title */}
            <div className="text-2xl">
                {title}
            </div>
            {/* time + No Comment */}
            <div className="flex justify-between my-4">
                <div className='flex items-center gap-1'> <BiTimeFive/> { + time + " hours ago"}</div>
                
                <div className='flex items-center gap-1'> < FaRegCommentDots /> {comment}</div>
            </div>
        </div>
    </div>
);

export default NewsCard;
