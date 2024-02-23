import { Component } from "../core/fundamental";
import movieStore, { getMovieDetails } from '../store/movie'

export default class Movie extends Component{
  async render(){
    this.el.classList.add('container','the-movie')
    this.el.innerHTML = /*html*/ `
      <div  class="poster skeleton"></div>
      <div class="specs">
        <div  class="title skeleton"></div>
        <div  class="labels skeleton"></div>
        <div  class="plot skeleton"></div>
      </div>
    `
    await getMovieDetails(history.state.id)
    const { movie } = movieStore.state
    // 고해상도 이미지 출력 코드(omdb api에서는 sx숫자로 이미지 크기를 조정가능,
    // 원래는 300크기였던 이미지를 늘려서 사용한거기때문에 해상도가 낮아졌는데 아예 크기가 700인 이미지를 사용하면
    // 해상도를 높여줄수있음)
    const bigPoster = movie.Poster.replace('SX300', 'SX700') 

    this.el.innerHTML = /*html*/ `
      <div style="background-image: url(${bigPoster})" class="poster"></div>
      <div class="specs">
        <div class="title">
          ${movie.Title}
        </div>
        <div class="labels">
          <span>${movie.Released}</span>
          &nbsp;/&nbsp; 
          <!-- nbsp는 html 특수기호로 띄어쓰기를 의미 -->
          <span>${movie.Runtime}</span>
          &nbsp;/&nbsp;
          <span>${movie.Country}</span>
          &nbsp;/&nbsp;
        </div>
        <div class="plot">
          ${movie.Plot}
        </div>
        <div>
          <h3>Ratings</h3>
          ${movie.Ratings.map(rating => {
            return `<p>${rating.Source} - ${rating.Value}</p>`
          }).join('')}
        </div>
        <div>
          <h3>Actors</h3>
          <p>${movie.Actors}</p>
        </div>
        <div>
          <h3>Director</h3>
          <p>${movie.Director}</p>
        </div>
        <div>
          <h3>Production</h3>
          <p>${movie.Production}</p>
        </div>
        <div>
          <h3>Genre</h3>
          <p>${movie.Genre}</p>
        </div>
      </div>
          
    `
  }
}