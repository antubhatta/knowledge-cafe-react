import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/blog";


const Blogs = ({handleBookMarks}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
             <h4 className="text-2xl">Blogs:{blogs.length}</h4>
            {
                blogs.map(blogs=><Blog key={blogs.id}
                    handleBookMarks={handleBookMarks}
                    blog={blogs}></Blog>)
            } 
        </div>
    );
};

export default Blogs;