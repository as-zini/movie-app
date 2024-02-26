import fetch from "node-fetch"
import {VercelRequest, VercelResponse} from '@vercel/node' // 버셀서버에서 사용할 수 있는 타입들을 가져오는 코드

const {APIKEY} = process.env

//vercel의 서버리스펑션
export default async function handler (request: VercelRequest, response: VercelResponse) {
  const {title, page, id} = JSON.parse(request.body)
  const url = id
    ? `https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}  `
  const res = await fetch(url)
  const json = await res.json()
  response.status(200).json(json)
}