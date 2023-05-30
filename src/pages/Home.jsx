import React from 'react'
import Chat from '../mycomponents/Chat'
import Sidebar from '../mycomponents/Sidebar'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home
