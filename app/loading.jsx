import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
    return <p> <Skeleton borderRadius={20} baseColor='#333' height={50}/></p>
  }