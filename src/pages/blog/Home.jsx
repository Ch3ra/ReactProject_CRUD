import React from 'react'

import Layout from '../../components/Layout'
import Card from './Blog Components/Card'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Layout>
        <div className='flex justify-center items-center flex-wrap space-x-6 mt-10 space-y-6'>
        <Link to='/desc'><Card name='Alish Ban'/></Link> 
        <Link to='/desc'><Card name='Ch3rayVAII'/> </Link>
        <Link to='/desc'> <Card name='Challange'/> </Link>
        
        </div>

    </Layout>
  )
}

export default Home