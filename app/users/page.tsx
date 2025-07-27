import React from 'react'

interface user{
    id: Number,
    name: String
 }

const Userspage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'})
    const users :user[] = await res.json()
  return (
    <div>
      <ul>
        <h1>Users list</h1>
        {users.map(user => <li key={user.id}>{user.name}</li> )}
      </ul>
    </div>
  )
}

export default Userspage
