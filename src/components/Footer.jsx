import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <ul className='footer__categories'>
                <li><Link to="/posts/categories/Technology">Technology</Link></li>
                <li><Link to="/posts/categories/Daily">DIY</Link></li>
                <li><Link to="/posts/categories/Entertaiment">Entertaiment</Link></li>
                <li><Link to="/posts/categories/Bussiness">Bussiness</Link></li>
                <li><Link to="/posts/categories/Education">Education</Link></li>
                <li><Link to="/posts/categories/Art">Art</Link></li>
                <li><Link to="/posts/categories/Investment">Investment</Link></li>
                <li><Link to="/posts/categories/Uncategorized">Uncategorized</Link></li>
                <li><Link to="/posts/categories/Weather">Weather</Link></li>
            </ul>
            <div className="footer__copyright">
                <small>All Right Reserved &copy; Copyright, Renn.</small>
            </div>
        </footer>
    )
}

export default Footer