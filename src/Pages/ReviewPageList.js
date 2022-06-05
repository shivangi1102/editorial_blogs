import React from 'react'
import ReviewPage from './ReviewPage'
export default function ReviewPageListPage() {

    const [articles, setarticles] = React.useState([])

    const url = 'http://localhost:8080/EditorialBlog/allArticles'

    async function articleFetch() {
        try {

            const response = await fetch(`${url}`)
            const data = await response.json()
            console.log(data);
            setarticles(data)
        }
        catch (error) {
        }
    }
    React.useEffect(() => {
        articleFetch();
    }, [])

    console.log(articles)
    return (
        <>
            {articles.map((item) => {
                console.log(item)
                return <ReviewPage key={item.id} {...item}  />
            })}
        </>
    )
}
