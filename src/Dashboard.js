import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function Dashboard() {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)
  const filter = []
  fetch('https://reqres.in/api/users')
    .then((response) => response.json())
    .then((res) => {
      setLoading(true)
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].first_name.startsWith("G")) {
          filter.push(res.data[i])
        }
      }
      setData(filter)
      setLoading(false)
    })
  return (
    <div>
      <Header />
      {loading ? (
        <></>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {JSON.stringify(data)}
             {/* {data.map((e) => (
              <tr>
                <td>{e.first_name}</td>
                <td>{e.last_name}</td>
                <td>{e.email}</td>
              </tr>
            ))}  */}
          </tbody>
        </table>
      )}
      <Footer />
    </div>
  )
}

export default Dashboard
