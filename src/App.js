import { Component } from "./core/fundamental";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

//app.js 파일을 기준으로 해서 각각의 페이지를 구분
export default class App extends Component{
  render(){
    const theHeader = new TheHeader().el
    const theFooter = new TheFooter().el
    const routerView = document.createElement('router-view')

    this.el.append(
      theHeader,
      routerView,
      theFooter)
  }
}