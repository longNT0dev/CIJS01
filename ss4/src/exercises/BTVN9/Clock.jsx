import React, { useEffect, useRef, useState } from 'react'

function Clock() {
  let [time, setTime] = useState(60)
  let timeRef = useRef()

  // Sử dụng chủ yếu để gọi API
  // Tương tác với DOM 
  // setTimeout, setInterval
  useEffect(() => {
    // setTimeout -> Chạy 1 đoạn code sau x(ms) 

    // setInterval -> Chạy 1 đoạn code sau mỗi x(ms) -> Khi nào phải kết thúc nó
    timeRef.current = setInterval(() => {
      console.log("hihi vẫn chạy nè")
      setTime((time => time - 1))
    }, 1000)


    // unmount
    return () => {
      // interval
      clearInterval(timeRef.current)

      // addEventListener DOM 
    }
  }, [])

  useEffect(() => {
    if (time == 0) {
      clearInterval(timeRef.current)
    }
  }, [time])

  return (
    <div>{time}</div>
  )
}

export default Clock