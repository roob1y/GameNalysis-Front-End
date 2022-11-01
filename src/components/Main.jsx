import ListReviews from './ListReviews'
import { getAllReviews } from '../utils/api'

import { useState } from 'react'


const Main = () => {
  const [reviews, setReviews] = useState([])
  getAllReviews().then(({reviews}) => {
    setReviews(reviews);
  })
  return (
    <>
      <div className='main'>
      <h2>Reviews</h2>
      <ListReviews reviews={reviews}/>
    </div>
    </>
  )
}

export default Main;