import React, { useEffect, useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from './PostItem'
import Loader from './Loader'
import axios from 'axios'



const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`${ProcessingInstruction.env.REACT_APP_BASE_URL}/posts`)
                setPosts(response?.data)
            } catch (error) {
                console.log(error)
            }

            setIsLoading(false)
        }

        fetchPosts()
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className="posts">
            {posts.length > 0 ? <div className="container posts__container">

                {
                    posts.map(({ id, thumbnail, category, title, description, authorID }) =>
                        <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID} />)
                }
            </div> : <h2 className='center'>No posts found</h2>}
        </section>
    )
}

export default Posts

// 1.28.11