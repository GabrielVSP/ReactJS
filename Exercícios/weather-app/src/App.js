import './App.css';
import './loading.min.css'
import logo from './logo.svg'
import sun from './images/sun.png'
import moon from './images/moon.png'


import axios from 'axios'
import {useState, useRef} from 'react'

//J6QrFQcALZLo/GMnnJPUIg==YxWLBRmfc1i6LeYo

function App() {

  const [city, setCity] = useState('Cidade')
  const [temp, setTemp] = useState(0)
  const [windSpeed, setWindSpeed] = useState(0)
  const [time, setTime] = useState('00:00')

  const [nasc, setNasc] = useState('06:00')
  const [por, setPor] = useState('18:00')

  const [isDay, setIsDay] = useState(sun)

  const [show, setShow] = useState(true)
  const [display, setDisplay] = useState('block')

  let date = new Date()
  let dados = useRef(null)
  let load = useRef(null)

  async function handleKeyDown(event) {

    setShow(!show)

    if(event.key =='Enter'){

      dados.current.style.display = "none"
      load.current.style.display = 'block'

      var latitude
      var longitude

      let response = await axios.get(`https://api.api-ninjas.com/v1/geocoding?city=
      ${event.target.value}`, {headers: { 'X-Api-Key': 'J6QrFQcALZLo/GMnnJPUIg==YxWLBRmfc1i6LeYo'},
      contentType: 'application/json',}).then((res) => {

        console.log("All right")

        setCity(res.data[0].name)

        latitude = res.data[0].latitude
        longitude = res.data[0].longitude

      }).catch((res) => {

        console.log("Wrong")
        console.log(res)

      })

      let response1 = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=relativehumidity_2m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1`).then((res) => {

        console.log("All right")

        let minFix = ''
        let hourFix = ''

        setTemp(res.data.current_weather.temperature)
        setWindSpeed(res.data.current_weather.windspeed)

        setNasc(res.data.daily.sunrise)
        setPor(res.data.daily.sunset)
        
        if(res.data.current_weather.is_day === 1) 
          setIsDay(sun)
        else 
          setIsDay(moon)

        if (date.getMinutes() < 10) {
          minFix = '0'
        }
        if(date.getHours < 10)  {
          hourFix = '0'
        }

        setTime(hourFix+date.getHours()+':'+minFix+date.getMinutes())
    

      }).catch((res) => {

        console.log(res)
        console.log('Errado')

      })
    
      load.current.style.display = 'none'
      dados.current.style.display = "flex"

    }

  }

  
  return (
    <>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <input type="text" placeholder="Digite o nome da cidade" onKeyDown={handleKeyDown}></input>

      <main>

        <section className="dados" ref={dados}>

          <img src={isDay} className="logo"></img>

          <section className="dataWraper">

            <div className="dataWraper">
              <h2>{city}</h2>
              <p><span className="material-symbols-outlined">device_thermostat</span> {temp} °C</p>
              <p><span className="material-symbols-outlined">air</span> {windSpeed} km/h</p>
              <p><span className="material-symbols-outlined">schedule</span> {time}</p>
            </div>

            <div className="dataWraper" two="true">
              <p>Nascer do sol: {nasc.toString().slice(-5)}</p>
              <p>Por do sol: {por.toString().slice(-5)}</p>
            </div>

          </section>

        </section>

        <div className="ld ld-hourglass ld-spin-fast" id="load" style={{fontSize:64, display: 'none'}} ref={load}>
        </div>

      </main>
      

    </>
  );

}

export default App;
