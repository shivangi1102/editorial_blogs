import React from 'react'
import Article from '../Components/Article'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
export default function HomePage() {
    var admin=true;
    let { id } = useParams();
    if (id==="3")
    admin=false;
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
            <Link to="new" ><Button variant="primary">New Article</Button></Link>
            <br />
            <br />
            <Link to="review" ><Button variant="primary">Review</Button></Link>
            {articles.map((item) => {
                console.log(item)
                return <Article key={item.id} {...item} admin={admin} />
            })}
        </>
    )
}
