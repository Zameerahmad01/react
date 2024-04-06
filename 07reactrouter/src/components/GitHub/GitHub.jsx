import React, { useEffect, useState } from 'react'

function GitHub() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Zameerahmad01')
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            setData(data)

        })
    })
  return (
    <div className='bg-gray-600 text-white text-3xl py-4 text-center'>
      github followers: {data.followers}
      <img  src="data.avatar_url" alt="github profile picture" width={300} />
    </div>
  )
}

export default GitHub
