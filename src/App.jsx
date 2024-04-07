import { useState } from "react"
import { Blog } from "./Blog"
import { Bookmarkes } from "./Bookmarkes/Bookmarkes"
import Header from "./Header"


function App() {
  const [add , setAdd]=useState([])
  


  const handleClick=()=>{



    console.log('Handlae Click Of Bloges')
  }

  return (
   <div>
<Header></Header>

 <div className= "md: flex max-w-7xl max-auto">
 <Blog handleClick={handleClick}></Blog>
 <Bookmarkes/>
 </div>
   </div>
  )
}

export default App
