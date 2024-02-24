import fetch from "node-fetch"

//vercel의 서버리스펑션
export default async function handler (request, response) {
  const {title, page, id} = JSON.parse(request.body)
  const url = id
    ? `https://omdbapi.com?apikey=7035c60c&i=${id}&plot=full`
    : `https://omdbapi.com?apikey=7035c60c&s=${title}&page=${page}  `
  const res = await fetch(url)
  const json = await res.json()
  response.status(200).json(json)
}