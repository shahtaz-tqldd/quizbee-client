import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Blog from '../../components/Blog/Blog';
import './BlogPage.css';

const BlogPage = () => {
  const blogdata = useLoaderData()
  return (
    <div>
      {
        blogdata.map(blog => <Blog key={blog.id} blog={blog} />)
      }
    </div>
  )
}

export default BlogPage