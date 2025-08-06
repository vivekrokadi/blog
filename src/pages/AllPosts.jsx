import React, { useEffect, useState } from 'react'
import authService from '../appwrite/storage'
import { Container, PostCard } from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        authService.getPosts([])
        .then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    },[])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap gap-5' >
                {
                    posts.map((post) => (
                        <div key={post.$id} className='p-2 w-[350px]'>
                                <PostCard {...post} />
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default AllPosts