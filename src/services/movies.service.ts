import type { Movie } from '@/types/Movie'
import axios from 'axios'

const axiosRequest = axios.create({
  baseURL: 'https://ghibliapi.vercel.app',
})

export const getMovies = async () => {
  const { data } = await axiosRequest.get<Movie[]>('/films')
  return data
}
