import React, { useState } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {
  const [data, setData] = useState({
    title: '',
    subtitle: '',
    image: '',
    category: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value} = e.target;

    setData({
      ...data,
      [name]: name === 'image' ?  e.target.files[0] : value
    });
  };
  console.log(data)

const {id}=useParams();
const nab =useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault()
  
    const response = await axios.patch(`https://react30.onrender.com/api/user/blog/${id}`, {
      headers: {
        "content-type": "multipart/form-data",
        "Authorization": localStorage.getItem('token')
      }
    });
    if (response.status===200){
      
      nab('/')
    }else {
      alert('Smoething went wrong while editing')
    }


  }



  return (
    
    <>
      <Layout>
      <div className='mt-20'>
        <div className="flex justify-center items-center w-screen h-screen bg-white">
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <form onSubmit={handleSubmit}>
              <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                <div className="flex">
                  <h1 className="font-bold uppercase text-5xl">Edit<br /> Blog</h1>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Title*" name='title' onChange={handleChange} />
                  <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Subtitle*" name='subtitle' onChange={handleChange} />
                  <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="file" name='image' onChange={handleChange} />
                  <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Category*" name='category' onChange={handleChange} />
                </div>
                <div className="my-4">
                  <textarea placeholder="Description*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name='description' onChange={handleChange}></textarea>
                </div>

                <div className="my-2 w-1/2 lg:w-1/4">
                  <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                    Update
                  </button>
                </div>
              </div>

              <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
                <div className="flex flex-col text-white">
                  <h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
                  <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam,
                    eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
                  </p>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-map-marker-alt pt-2 pr-2" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Main Office</h2>
                      <p className="text-gray-400">9800919170, Lorem, ipsum dolor.</p>
                    </div>
                  </div>

                  <div className="flex my-4 w-2/3 lg:w-1/2">
                    <div className="flex flex-col">
                      <i className="fas fa-phone-alt pt-2 pr-2" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Call Us</h2>
                      <p className="text-gray-400">Tel: 0256789</p>
                      <p className="text-gray-400">Fax: 9804077612</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            

       

          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default EditBlog