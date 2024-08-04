import React from 'react'
import { useState } from 'react'
import "./Home.css"
function Home() {
    const language=[
        {
          id:1,
          name:"English"
        }
        ,
        {
          id:2,
          name:"Hindi"
        },
        {
          id:3,
          name:"Marathi"
        },
        {
          id:4,
          name:"Tamil"
        },
        {
          id:5,
          name:"Telugu"
        },
        {
          id:6,
          name:"Kannada"
        },{
          id:7,
          name:"Urdu"
        },{
          id:8,
        }
      ]
       const [lang,setLang]=useState(language)
  return (
   <>
  <div className='main_container'>
  <div className='selection'>select section</div>
  <div className='show'>show section</div>
  </div>
   </>
  )
}

export default Home
