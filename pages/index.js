import {useState, useEffect} from 'react'
import Head from 'next/head'
import HomapegeSkeleton from "../components/HomePageSkeleton"

export default function HomePage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
      setLoading(true)
      fetch('https://backend-omega-seven.vercel.app/api/getjoke')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
    }


  return (
    <>
      <Head>
        <title>Programing jokes</title>
      </Head>
      <div className='container'>
      <h1 className='app-topic'>Programing Jokes</h1>
        <div className='container-inner'>
            {loading ? <HomapegeSkeleton /> :
            <>
            {data.map(joke => <h3 className='question'>{joke.question}</h3>)}
            {data.map(joke => <h4 className='punchline'>{joke.punchline}</h4>)}
            </>
            }
            <button className='next-btn' onClick={getData}>Next Joke</button>
          </div>
      </div>
    </>
  )
}