import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../assets/mern-blog-assets/blog22.jpg'

const PostDetail = () => {
    return (
        <section className="post-detail">
            <div className="container post-detail__container">
                <div className="post-detail__header">
                    <PostAuthor />
                    <div className="post-detail__buttons">
                        <Link to={'/posts/werwer/edit'} className='btn sm primary'>Edit</Link>
                        <Link to={'/posts/werwer/delete'} className='btn sm danger'>Delete</Link>
                    </div>
                </div>
                <h1>This is post title</h1>
                <div className="post-detail__thumbnail">
                    <img src={Thumbnail} alt="" />
                </div>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quia expedita dolorem provident aspernatur non quos animi ducimus, accusantium voluptas? Sapiente omnis possimus natus? Molestiae minus in nihil deserunt? Rerum deleniti voluptas pariatur blanditiis impedit, fuga fugiat quam et! Quidem.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, maxime culpa. Vero eveniet autem cupiditate sapiente? Aut nihil ad ducimus. Maxime, iste expedita architecto rem numquam delectus aliquid animi eaque rerum nesciunt. Quibusdam debitis at explicabo deleniti temporibus ab voluptas ipsam modi aspernatur aliquid tempora, reiciendis dolorem dicta recusandae corporis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque voluptatum odio, nisi error hic nostrum fugiat earum, sit ad quas beatae ipsum dolor expedita nobis repellat veritatis, officiis odit! Eos culpa quod fugit. Quos, quasi excepturi alias molestiae earum vero veritatis in ad consequuntur debitis nam repellat, magni non? Est, amet obcaecati repellendus possimus commodi iusto qui pariatur maiores quibusdam soluta dolorum sapiente modi hic non ipsam. Laboriosam ipsum reprehenderit nihil. Qui voluptate, dolorem optio beatae nobis tenetur eum minus voluptatibus expedita amet pariatur eligendi sequi at earum nostrum, corporis molestias, praesentium ad iusto officiis aperiam in ut ab. Et commodi omnis enim impedit corporis soluta, eveniet quos quas ipsam repellat!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque voluptatum odio, nisi error hic nostrum fugiat earum, sit ad quas beatae ipsum dolor expedita nobis repellat veritatis, officiis odit! Eos culpa quod fugit. Quos, quasi excepturi alias molestiae earum vero veritatis in ad consequuntur debitis nam repellat, magni non? Est, amet obcaecati repellendus possimus commodi iusto qui pariatur maiores quibusdam soluta dolorum sapiente modi hic non ipsam. Laboriosam ipsum reprehenderit nihil. Qui voluptate, dolorem optio beatae nobis tenetur eum minus voluptatibus expedita amet pariatur eligendi sequi at earum nostrum, corporis molestias, praesentium ad iusto officiis aperiam in ut ab. Et commodi omnis enim impedit corporis soluta, eveniet quos quas ipsam repellat!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque voluptatum odio, nisi error hic nostrum fugiat earum, sit ad quas beatae ipsum dolor expedita nobis repellat veritatis, officiis odit! Eos culpa quod fugit. Quos, quasi excepturi alias molestiae earum vero veritatis in ad consequuntur debitis nam repellat, magni non? Est, amet obcaecati repellendus possimus commodi iusto qui pariatur maiores quibusdam soluta dolorum sapiente modi hic non ipsam. Laboriosam ipsum reprehenderit nihil. Qui voluptate, dolorem optio beatae nobis tenetur eum minus voluptatibus expedita amet pariatur eligendi sequi at earum nostrum, corporis molestias, praesentium ad iusto officiis aperiam in ut ab. Et commodi omnis enim impedit corporis soluta, eveniet quos quas ipsam repellat!
                </p>
            </div>
        </section>
    )
}

export default PostDetail