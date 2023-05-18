import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Photos = () => {
   const [data, setData] = useState([])

   useEffect(()=>{
    axios({
        url:'https://jsonplaceholder.typicode.com/photos',
        method:'get'
    }).then((response)=>{
        setData(response.data)
    })
   })
  return (
    <div className='row'>
        <div className="col-md-12">
            <table className='table table-stripped'>
                <thead>
                    <th>No_</th>
                    <th>Title</th>
                    <th>Url</th>
                </thead>
                <tbody>
                    {
                        data.map((item, index)=> <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.url}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Photos