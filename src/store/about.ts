import { Store } from "../core/fundamental"

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}
export default new Store<State>({
  photo: '../../zini_logo.png',
  name: 'ZINI / HwangJiHyeon',
  email: 'aszini@naver.com',
  blog: '',
  github: 'https://github.com/as-zini',
  repository: 'https://github.com/as-zini/movie-app'
})