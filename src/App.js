import React, { useEffect, useState } from 'react';
import Card from "./Components/Card"
import {Row,Col} from "antd"
let dynamicURL=""

function imageURL(name){
  const prefixURL="https://avatars.dicebear.com/v2/avataaars/", suffixUrl=".svg?options[mood][]=happy";
  return URL=prefixURL+name+suffixUrl;
}
function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
  async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  }
  fetchUsers();
  },
 []);

 function handleDelete(id) {
  const updatedUsers = users.filter(user => user.id !== id);
  setUsers(updatedUsers);
}
  return (
    
    <div>
       <Row gutter={[24, 24]}>
        {users.map(user => (
          <Card
          imgUrl={imageURL(user.name)}
          name={user.name}
          phoneNo={user.phone}
          mail={user.email}
          city={user.address.city}
          onDelete={() => handleDelete(user.id)}
          />
        ))
        }
        </Row>
    </div>
  );
}

export default App;

