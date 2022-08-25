import { CreatePostDto } from "./dto/post.dto";
import axios from 'axios'

export class PostAPI {


   public static async getAll(): Promise<CreatePostDto[]> {


      let data: any = [];


      return axios.get("http://localhost:3000/posts").then(res => {
         return res.data;
      })




   }



}