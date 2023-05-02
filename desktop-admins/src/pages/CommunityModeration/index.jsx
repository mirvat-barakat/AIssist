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
            <div className="body-community">
            <Sidebar/>
            <div className="title1">
            <h1>Community Moderation</h1>
            </div>
            <div className="mainPostView">
                <div >
                    {posts.map(post => (
                    <div className="postView">
                    <div key={post.id} >
                        <div className="imageView">
                            <img src={post.profile_picture} className="profilePhoto"></img>
                            <p className="username">{post.name}</p>
                        </div>
                    </div>
                    <div className="postContent">
                        <p>{post.content}</p>
                    </div>
                    <div className="actions">
                        <div>
                        <a>Comments</a>
                        </div>
                        <div>
                        <a>Delete</a>
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