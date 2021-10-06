import React, { useState, useEffect, useRef } from 'react'
import { getData } from '../../service'
import Card from './card/card'
const CardList = () => {
  const [Data, setData] = useState()
  const mounted = useRef()
  useEffect(() => {
    if (!mounted.current) {
      getDatas()
    }
    mounted.current = true
  }, [Data])
  const getDatas = () => {
    getData().then((res) => {
      setData(res)
    })
  }

  const renderList = () => {
    if (Data) {
      return Data.map((item, index) => {
        return (
          <div key={item.id}>
            <Card
              index={index}
              name={item.title}
              detail={item.body}
              id={item.id}
              image={item.image}
              getData={getDatas}
            />
          </div>
        )
      })
    } else {
      return <div>Loading...</div>
    }
  }

  return <div>{renderList()}</div>
}

export default CardList
