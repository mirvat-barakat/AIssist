import React , {useState, useEffect} from "react";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import "./styles.css";

const Community = () => {

    const[posts, setPosts]= useState([]);
    const token = localStorage.getItem("token");

    const getPosts = {
        method: 'GET',
        url: 'http://192.168.1.6:8000/api/v0.0.1/community/posts',
        headers: {
          'content-type': 'application/json',
          'Accept' : 'application/json',
          'Authorization': 'bearer ' + token
        },
      };
  
      useEffect(() => {
        axios.request(getPosts)
            .then(response => {
                console.log(response);
                setPosts(response.data.posts);
            })
            .catch(function (error) {
                console.error();
            });
      },[token]);

    return(
        <>
            <div className="body">
            <Sidebar/>
            <div className="title1">
            <h1>Community Moderation</h1>
            </div>
            <div >
                <div >
                    {posts.map(post => (
                    <div >
                    <div key={post.id} >
                        <div >
                            <img  source={{uri:post.profile_picture}}></img>
                            <p  numberOfLines={3} ellipsizeMode="tail">{post.name}</p>
                        </div>
                    </div>
                    <div >
                        <p>{post.content}</p>
                    </div>
                    <div >
                        <div>
                        <a>Comments</a>
                        </div>
                    </div>
                    </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    );

};

export default Community;