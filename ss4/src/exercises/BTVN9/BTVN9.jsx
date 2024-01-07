import React, { useEffect, useState } from 'react'
import Clock from './Clock'

function BTVN9() {

    let [count, setCount] = useState(0)
    let [isClick, setIsClick] = useState(false)
    const [data, setData] = useState([])

    // Hàm này sẽ chạy 1 lần lúc mount. Sẽ chạy mỗi khi state thay đổi
    // useEffect(() => {
    //     // componentDidMount va componentDidUpdate
    //     console.log("useEffect không có dependency")
    //     // unmount
    // })

    // Hàm này sẽ chạy 1 lần lúc mounting
    // useEffect(() => {
    //   // componentDidMount
    //   console.log("useEffect có dependency là 1 mảng rỗng")
    //   // unmount
    // }, [])

    // Hàm này sẽ chạy 1 lần lúc mounting và sẽ chạy lại khi state trong mảng được update

    // useEffect(() => {
    //     // componentDidMount va componentDidUpdate
    //     console.log("useEffect có dependency là 1 mảng chứa các biến state")
    //     // unmount
    // }, [count])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, [])



    return (
        <>
            <div>Day la btvn buoi {count}</div>
            <button onClick={() => setCount((prev) => prev = prev + 1)}>Tang bien count</button>
            <button onClick={() => setIsClick(prev => !prev)}>Switch clicked state</button>
            {isClick && <Clock />}

            {
                data.map(el => (
                    <p>{el.title}</p>
                ))
            }
        </>

    )
}

export default BTVN9