import React from 'react';
import { Link } from 'react-router';
import { IoMdArrowBack } from "react-icons/io";

const NewsDetailsCard = ({news}) => {

    return (
        <div className='space-y-4'>
            <img className='w-full h-[400px] object-cover rounded-sm' src={news.image_url} alt="" />
            <h2 className='font-bold text-2xl'>{news.title}</h2>
            <p className='text-accent'>{news.details}</p>
            <Link onClick={window.scrollTo(0, 200)} to={`/category/${news.category_id}`} className='btn bg-secondary py-2 px-3 font-medium text-xl text-base-100'><span><IoMdArrowBack /></span>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;