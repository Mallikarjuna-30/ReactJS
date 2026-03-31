import React, { useState } from 'react'
const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [data, setData] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData(formData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
        </div>
      )}
    </div>
  )
}

export default App