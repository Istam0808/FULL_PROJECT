"use client"
import "./style.scss"
import { useState } from 'react'
import { BASE_URL } from "@/store"

function CreatePostModal({ closeModal }) {
    const [form, setForm] = useState({
        title: '',
        content: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        try{
            const response = await fetch(BASE_URL + "/api/posts/", {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            console.log(data)
            alert('Post created successfully')
            closeModal()

        } catch(e){
            console.log(e)
            alert('error creating post')

        }

        console.log(form)
    }
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="post-form-modal">
            <form className="create-post-form-wrapper"
                onSubmit={handleSubmit}
            >
                <span onClick={closeModal} id='close-modal-button'>&times;</span>
                <div className="form-control">
                    <label htmlFor="post-title-input">Title</label>
                    <input
                        type="text"
                        id='post-title-input'
                        name='title'
                        placeholder='Title'
                        value={form.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="post-title-content">Content</label>
                    <textarea
                        id='post-title-content'
                        name='content'
                        placeholder='content'
                        value={form.content}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    )
}

export default CreatePostModal