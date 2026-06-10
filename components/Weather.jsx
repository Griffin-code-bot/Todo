      import {useState, useEffect} from 'react'

    export default function Weather() {
  
      const [weather, setWeather] = useState(null)

      useEffect( ()=> {
       
        async function getUser() {
        const response =await fetch('https://api.github.com/users/octocat')
        const data = await response.json()
        
        setWeather(data)
        }

        getUser()
              
      }
       ,[])


    
      return(
        <div>
       <pre>{JSON.stringify(weather, null, 2)}</pre>
       <h2> Weather</h2>
       <p> Temperature: 35 degree celsius</p>
       <p>Condition: Sunny </p>


         </div>

            )
        }
