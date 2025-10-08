"use client"
import "./style.scss"
import { useState, useEffect } from 'react'
import { BASE_URL } from '@/store'
import CreatePostModal from "./components/CreatePostModal"

function Posts() {
    const [showModal, setShowModal] = useState(false)
    const [posts, setPosts] = useState([])

    async function getPosts() {
        const response = await fetch(BASE_URL + "/api/posts/")
        const data = await response.json()
        setPosts(data.data)
    }
    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="posts-page-wrapper">
            <h1>Posts</h1>

            <button onClick={() => setShowModal(true)}>
                Create new post
            </button>

            {
                showModal && <CreatePostModal closeModal={() => setShowModal(false)} />
            }
        </div>
    );
}

export default Posts;