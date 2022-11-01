import ListReviews from './ListReviews'
import Category from './CategoryList'


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
      <Category />
      <ListReviews reviews={reviews}/>
    </div>
    </>
  )
}

export default Main;