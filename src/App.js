import React from 'react';
import { useState, useEffect } from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {MailOutlined,GlobalOutlined,PhoneOutlined} from '@ant-design/icons'
import { Card } from 'antd';
const { Meta } = Card;

const SubFunction = (props) => { return (
  <Card className='Card'
    style={{
      width: 250,
      height: 450

    }}
    cover={
      <img
        alt="example"
        src={props.image} 
      />
    }
    actions={[
      <SettingOutlined key="setting" color="red" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      title={props.name}
    /><br/> 
    <GlobalOutlined/>
    <>{"       "}
      {props.website}
    </><br/>
    <PhoneOutlined/>
    <>{"       "}
      {props.number}
    </><br/>
    <MailOutlined/>
    <>{"       "}
      {props.email}
    </>
    
  </Card>
  )}
function App (){ 
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";
  const string1="https://avatars.dicebear.com/v2/avataaars/";
  const string2=".svg?options[mood][]=happy"
  useEffect(() => {
     fetch(url)
        .then(res => {
          if (!res.ok) {
                return Error("error");
         }
         return res.json();
       })
      .then(data => setPosts(data));
     });
<>
  </>
return(
  <>
  {posts.map(post => (
  <SubFunction 
  image={string1+post.username+string2} 
  name={post.name} 
  email={post.email} 
  number={post.phone}
  website={post.website}

  />
  ))}
  </>
  );
}


export default App;

