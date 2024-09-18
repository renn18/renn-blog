import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/mern-blog-assets/avatar1.jpg'

const PostAuthor = () => {
    return (
        <Link to={`/posts/users/adjaj`} className='post__author'>
            <div className="post__author-avatar">
                <img src={Avatar} alt="" />
            </div>
            <div className="post__author-details">
                <h5>By: Putra Pratama</h5>
                <small>Just Now</small>
            </div>
        </Link>
    )
}

export default PostAuthor