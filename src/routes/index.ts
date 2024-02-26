//routes폴더에서 여러개의 페이지들을 관리하는 내용을 다룰것임
import {createRouter} from '../core/fundamental' 
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter([
  {path:'#/', component: Home},
  {path:'#/movie', component: Movie},
  {path:'#/about', component: About},
  {path:'.*', component: NotFound}
])