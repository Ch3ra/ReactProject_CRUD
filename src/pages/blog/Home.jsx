import React from 'react'

import Layout from '../../components/Layout'
import Card from './Blog Components/Card'

const Home = () => {
  return (
    <Layout>
        <div className='flex justify-center items-center flex-wrap space-x-6 mt-10 space-y-6'>
        <Card name='Alish Ban'/> 
        <Card name='Ch3rayVAII'/> 
        <Card name='Challange'/> 
        
        </div>

    </Layout>
  )
}

export default Home