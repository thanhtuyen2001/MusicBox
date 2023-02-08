import React from 'react';
import { NewsCard } from '../components';

const news = [
    { img : 'https://images.unsplash.com/photo-1551658827-3450f12257cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdGl2aXR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60', 
    title: "Why does Golden Globles always get it so wrong?", time: '9', comment: '10', tag: "Features"},
    { img : 'https://images.unsplash.com/photo-1551658827-3450f12257cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdGl2aXR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60', 
    title: "Why does Golden Globles always get it so wrong?", time: '9', comment: '10', tag: "Features"},
    { img : 'https://images.unsplash.com/photo-1551658827-3450f12257cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdGl2aXR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60', 
    title: "Why does Golden Globles always get it so wrong?", time: '9', comment: '10', tag: "Features"},
    { img : 'https://images.unsplash.com/photo-1551658827-3450f12257cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdGl2aXR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60', 
    title: "Why does Golden Globles always get it so wrong?", time: '9', comment: '10', tag: "Features"},
]
const NewsPage = () => {
    return (
        <div className='p-8 '>
            {/* hashtag */}
            <div className='text-2xl mb-8'>
                #All #Music #Reviews #Interviews
            </div>
            {/* news list */}
            <div className='flex justify-start flex-wrap'>
               {
                news.map((news,i) => <NewsCard title={news.title} img={news.img} time={news.time} comment={news.comment} tag={news.tag} key={i}/>)
               }
            </div>
            {/* loadmore */}
            <div className='mx-auto'>
                <button className='text-white bg-green-600 px-4 py-2 rounded-lg '>Load more</button>
            </div>
        </div>)
}

export default NewsPage;
