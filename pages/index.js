import {useState, useEffect} from 'react'


export default function Home() {

  const [data, setData] = useState([])
  function getData() {
      fetch('https://backend-omega-seven.vercel.app/api/getjoke')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
    }

    useEffect(() => {
      getData()
    }, []);




  return (
    <>
    <div className='container'>
    <h1 className='app-topic'>Programing Jokes</h1>
      <div className='container-inner'>
          {data.map(joke => <h3 className='question'>{joke.question}</h3>)}
          {data.map(joke => <h4 className='punchline'>{joke.punchline}</h4>)}
          <button className='next-btn' onClick={getData}>Next Joke</button>
        </div>
    </div>
    </>
  )
}









