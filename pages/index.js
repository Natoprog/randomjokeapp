import {useState, useEffect} from 'react'




export default function Home({}) {


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



  console.log(data);


  return (
    <div>
      <h1>Programing Jokes</h1>
      <h1>{data.map(joke => <li>{joke.question}</li>)}</h1>
      <p>{data.map(joke => <li>{joke.punchline}</li>)}</p>
      <button onClick={getData}>Next Joke</button>
    </div>

  )
}









