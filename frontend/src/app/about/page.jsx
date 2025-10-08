"use client"

import "./style.scss"
import { useEffect } from "react";
import { BASE_URL } from "@/store"

function About() {

    async function getPosts() {
        const response = await fetch(BASE_URL + "/api/posts/")   
        const data = await response.json()
        console.log(data)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="about-page-wrapper">
            <h1>About page</h1>
            <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Заманивший гор агентство, вопрос, знаках буквоград, своих за обеспечивает не послушавшись текстов повстречался оксмокс путь проектах коварных. Языком, запятых имеет?</p>
        </div>
    );
}

export default About;