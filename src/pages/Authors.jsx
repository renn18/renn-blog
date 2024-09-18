import React, { useState } from 'react'

import Avatar1 from '../assets/mern-blog-assets/avatar1.jpg'
import Avatar2 from '../assets/mern-blog-assets/avatar2.jpg'
import { Link } from 'react-router-dom'


const authorsData = [
    { id: 1, avatar: Avatar1, name: 'Puput', posts: 3 },
    { id: 2, avatar: Avatar2, name: 'Renn', posts: 3 }
]

const Authors = () => {
    const [authors, setAuthors] = useState(authorsData)

    return (
        <section className="authors">
            {authors.length > 0 ? <div className="container authors__container">
                {
                    authors.map(({ id, avatar, name, posts }) => {
                        return <Link key={id} to={`/posts/users/${id}`} className='author'>
                            <div className="author__avatar">
                                <img src={avatar} alt={`Image of ${name}`} />
                            </div>
                            <div className="author__info">
                                <h4>{name}</h4>
                                <p>{posts}</p>
                            </div>
                        </Link>
                    })
                }
            </div> : <h2 className='center'>No users/authors found</h2>}
        </section>
    )
}

export default Authors