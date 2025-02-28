import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './views/Home/Home'
import Movie from './views/movieDetail/Movie'
import MovieList from './component/MovieList/MovieList'
import Header from './component/Header/Header'
export default function App() {
  return (
    <div className='App'>

      <Router>
        <Header/>
        <Routes>
          <Route extact path='/' element={<Home/>}/>
          <Route path='movie/:id' element={<Movie/>}/>
          <Route path='movies/:type' element={<MovieList/>}/>
          <Route path='/*' element={<h2>error page</h2>}/>
        </Routes>
      </Router>

         
    </div>
  )
}
