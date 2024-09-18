import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const EditPost = () => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [thumbnail, setThumbnail] = useState('')

    const navigate = useNavigate()

    const { currentUser } = useContext(UserContext)
    const token = currentUser?.token

    //redirect to login page for any user who isn't logged in
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [])

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' },],
            ['link', 'image'],
            ['clean']
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    const POST_CATEGORIES = ["Agriculture", "Business", "Education", "Entertaiment", "Art", "Investment", "Uncategorized", "Weather"]
    return (
        <section className="create-post">
            <div className="container">
                <h2>Edit Post</h2>
                <p className="form__error-message">This is an error message</p>
                <form className="form create-post__form">
                    <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
                    <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
                        {
                            POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
                        }
                    </select>
                    <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} />
                    <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg' />
                    <button type='submit' className='btn-primary'>Create</button>
                </form>
            </div>
        </section>
    )
}

export default EditPost