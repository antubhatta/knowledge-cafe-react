import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks]=useState([])

  const handleBookMarks=(blog)=>{
    console.log('Book Marks Adding soon')
    console.log(blog)
    const newBookMarks=[...bookmarks,blog]
    setBookmarks(newBookMarks)
  }

  return (
    <div className='container mx-auto'>
     <Header></Header>
     <div className='md:flex gap-6 mt-5'>
     <Blogs handleBookMarks={handleBookMarks}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
      
    </div>
  )
}

export default App
