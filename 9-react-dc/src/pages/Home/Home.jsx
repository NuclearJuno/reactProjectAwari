import { useNavigate } from 'react-router-dom'
import { users } from '../../data'
import { List } from '../../components'
import React from 'react'

const Home = () => {
  const navigate = useNavigate()
  const handleOnItemClick = (item) => {
    const { id } = item
    navigate(`/details/${id}`)
  }
  return (
        <div>
            <h1>Home</h1>
            <List items = { users } onItemClick={handleOnItemClick} />
        </div>
  )
}
export default Home
