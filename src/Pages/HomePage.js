import React from 'react'
import Article from '../Components/Article'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
export default function HomePage() {
    const [articles,setarticles]=React.useState([])
        
    

    const url='https://62920326cd0c91932b6be10a.mockapi.io/api1/home/articles'
    
    async function articleFetch(){
        try{
            
                const response= await fetch(`${url}`)
            const data = await response.json()
            console.log(data);    
                setarticles(data)
        }
        catch(error){
        }
    }
    React.useEffect(()=>{
        articleFetch();
    },[])

    console.log(randon)
    
    return (
        <>
        <Link to="new" ><Button variant="primary">New Article</Button></Link>
        <br/>
        <br/>
        <Link to="review" ><Button variant="primary">Review</Button></Link>
        {articles.map((item) => {
            console.log(item)
            return <Article key={item.id} {...item} admin={true} />
          })}
          </>
    )
}
