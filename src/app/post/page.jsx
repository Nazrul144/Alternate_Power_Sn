import React from 'react'
import getAllServices from '../../../lib/getAllServices'

const PostPage = () => {
    const result = getAllServices()
    console.log(result)
  return (
    <div>
        <h1>All Posts:</h1>
        <h1></h1>
    </div>
  )
}

export default PostPage