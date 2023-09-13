import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/blog";

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            <h4 className="text-2xl">Blogs:{blogs.length}</h4>
            {
                blogs.map(blogs=><Blog key={blogs.id} blog={blogs}></Blog>)
            }
        </div>
    );
};

export default Blogs;