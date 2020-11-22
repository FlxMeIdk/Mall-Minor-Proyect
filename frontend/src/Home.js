import React from 'react';
import MessageSender from './MessageSender';
import Post from './Post';
import './Home.css';
import Recommendation from './Recommendation';

function Home() {
    return (
        <div className="Home">
           <div className="home__carousel">
                <img className="slider" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMHdwPq2ZRZxJwZCvZMHqvIasUNsIwtpmcQ&usqp=CAU"
                />              
           </div>
    
           <div className="home__feed">
              <div className="home__post">
              <MessageSender />

              <Post 
                 profilePic='https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4'
                 message='this is a message'
                 timestamp='time'
                 imgName='imgName'
                 username='Alonso'
              />
              </div>

              <div className="home__widgets">
                 <Recommendation />
                 {/* contactos */}
              </div>
           </div>
        </div>
    );
}

export default Home;
