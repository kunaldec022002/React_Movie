import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home section</h1>
      <Link to={'/'}>Home</Link>
      <Link to={'movie/:id'}>Movie</Link>
    </div>
  )
}
