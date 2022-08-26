import { useEffect, useState } from 'react';
import './App.css';
import { PostAPI } from './api/post.api';
import { CreatePostDto } from './api/dto/post.dto';
import Button from '@mui/material/Button';



function App() {
  const [posts, setPosts] = useState<CreatePostDto[]>([])
  useEffect(() => {
    async function fetchAll(){
      const resp = await PostAPI.getAll();

      console.log("response found", resp)
      setPosts(resp);
    }

    fetchAll().catch((error) => {
      console.log("The error is :"+error.message)
  });
  },[])

 return (
  
 
    <div className="App">
       <ul>
      {
         posts.map(post => {
          return <li key={post.id}>{post.title},{post.id}</li>

        

          
        })
      }
      <Button variant="contained">Create Post</Button>
       </ul>

    </div>

   
  );


    
}

export default App;
