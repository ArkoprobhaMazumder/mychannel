import React, { useEffect, useState } from 'react'
import "./about.css";
const About = () => {

  const url = "https://newsapi.org/v2/everything?q=apple&from=2023-11-27&to=2023-11-27&sortBy=popularity&apiKey=f17f0420b36b4fea8fb34b11f3fa51eb";
  const [news, setNews] = useState({ articles: [] });
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const func = async () => {
      const response = await fetch(url);
      const parsedata = await response.json();
      setNews({ articles: parsedata.articles });
      console.log(parsedata)

    }
    func();
  }, [])





  return (
    <>

      <div className='cointainer m-3'>
        <h1 className='my-5'>About Business Today!</h1>
        <div className="maincontainer">
          {
            news.articles.map((item) => {
              return (
                <div className="itemBox" key={item.url}>
                  <img src={item.urlToImage} alt="img" />
                  <h1>{item.author}</h1>
                  <h3>{item.publishedAt}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                  <a href={item.url} target='_blank'>read more</a>
                </div>
              )
            })
          }

        </div>
      </div>
    </>

  )
}

export default About
