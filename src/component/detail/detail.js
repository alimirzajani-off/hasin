import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getData } from '../../service'
import './detail.css'

const Detail = (props) => {
  const [Data, setData] = useState([])

  const { id } = props.match.params
  const mounted = useRef()
  useEffect(() => {
    if (!mounted.current) {
      getDatas()
    }
    mounted.current = true
  })

  const getDatas = () => {
    getData().then((res) => {
      return res.map((item) => {
        if (item.id == id) {
          setData({ title: item.title, detail: item.body })
        }
      })
    })
  }

  return (
    <div className="detail">
      <h4>{Data.title}</h4>
      <p>{Data.detail}</p>
      <Link to="/">
        <button>back home</button>
      </Link>
    </div>
  )
}

export default Detail
