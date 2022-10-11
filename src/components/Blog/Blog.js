import React from 'react'
import './Blog.css'

const Blog = ({ blog }) => {
    const { title, body, img } = blog
    return (
        <div className='blog-card'>
            <div>
                <img src={img} alt={title} />
            </div>
            <div>
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: body }}></div>
            </div>
        </div>
    )
}

export default Blog