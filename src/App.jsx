import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks]=useState([])
  const [readingTime,setReadingTime] =useState(0)

  const handleBookMarks=(blog)=>{
    // console.log('Book Marks Adding soon')
    // console.log(blog)
    const newBookMarks=[...bookmarks,blog]
    setBookmarks(newBookMarks)
  }
  const handleReadingTime=(time,id)=>{
    // console.log(id)
    // console.log('reading time', time)
    // console.log('hi ki obosta')
    const newReadingTime=readingTime+time 
    setReadingTime(newReadingTime)
    // setReadingTime(newReadingTime)
    // remove the blog from bookMarks
    const remaining=bookmarks.filter(bookmark=>bookmark.id !== id)
    setBookmarks(remaining)

  }

  return (
    <div className='container mx-auto'>
     <Header></Header>
     <div className='md:flex gap-6 mt-5'>
     <Blogs handleBookMarks={handleBookMarks} 
      handleReadingTime={ handleReadingTime}
     ></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
      
    </div>
  )
}

export default App
