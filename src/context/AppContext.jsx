import { createContext, useState } from "react";
import App from "../App";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const navigate = useNavigate();

    const [loading,setLoading] = useState(false);
    const [blogs,setBlogs] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    async function fetchBlogs(page,tag,hashtag){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        else if(hashtag){
            url += `&hashtag=${hashtag}`;
        }
        try{
            const res = await fetch(url,{
                origin:"http://localhost/5173",
                mode:"cors",
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Access-Control-Allow-Origin" : "*"
                },
            });    
            const data = await res.json();
            if(!data.blogs || data.blogs.length === 0){
                throw new Error("Blogs not fetched");
            }
            
            if(!tag){
                setPage(data.page);
                setTotalPages(data.totalPages);
                setBlogs(data.blogs);
            }
            else{
                setBlogs(data.blogs);
            }
            
        }
        catch(error){
            setPage(1);
            setBlogs([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function pageChangeHandler(page){
        navigate({search: `?page=${page}`})
        setPage(page);
    }

    const value = {
        loading,setLoading,blogs,setBlogs,page,setPage,totalPages,setTotalPages,fetchBlogs,pageChangeHandler
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}


