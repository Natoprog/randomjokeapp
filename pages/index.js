import {useState, useEffect} from 'react'
import Head from 'next/head'
import HomapegeSkeleton from "../components/HomePageSkeleton";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

export default function HomePage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isDark, setTheme] = useState(true)

  useEffect(() => {
    getData()
  }, []);

  useEffect(()=> {
    if(!isDark) {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [isDark])

  const getData = () => {
      setLoading(true)
      fetch('https://backend-omega-seven.vercel.app/api/getjoke')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
    }

  const handleChangeTheme = () => {
    setTheme(!isDark)
    }

  const footerDate = new Date().getFullYear()

  return (
    <>
      <Head>
        <title>Programing jokes</title>
      </Head>
      <div className='container'>
        <header>
        <h1 className='app-topic'>Programing Jokes</h1>
          <div className='app-theme'>
            <button className='toggle-btn' onClick={handleChangeTheme}>
              {!isDark ? <DarkModeIcon fontSize='large' sx={{color: 'black'}}/> : <LightModeIcon fontSize='large' sx={{color: 'white'}}/>}
            </button>
          </div>
        </header>
        <div className='container-inner'>
              {loading ? <HomapegeSkeleton /> :
                <>
                {data.map((joke, i) => <h3 key={i} className='question'>{joke.question}</h3>)}
                {data.map((joke, i) => <h4 key={i} className='punchline'>{joke.punchline}</h4>)}
                </>
              }
              <button className='next-btn' onClick={getData}>Next Joke</button>
          </div>

        <footer>
            <span>&copy; {footerDate}</span>
            <Link href="https://github.com/Natoprog/randomjokeapp" className='footer-link' target='_blank'><GitHubIcon sx={{color: isDark ? 'white' : 'black' }}/></Link>

        </footer>
      </div>
    </>
  )
}