import React, { useState } from 'react'

function Header({ isLogin, handleSmt }) {
    // const [isLogin, setIsLogin] = useState(false)

    // const handleSwitchLoginState = () => {
    //     setIsLogin(!isLogin)
    // }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'red', height: '60px', alignItems: 'center' }}>
            <div className='labelContainer' style={{ display: 'flex', flexDirection: 'row', padding: '50px' }}>
                <a style={{ marginRight: '50px' }}>HOME</a>
                <a style={{ marginRight: '50px' }}>ABOUT</a>
                <a style={{ marginRight: '50px' }}>SERVICES</a>
                <a style={{ marginRight: '50px' }}>SHOWCASE</a>
                <a style={{ marginRight: '50px' }}>BLOG</a>
                <a style={{ marginRight: '50px' }}>CONTACT</a>
            </div>
            {
                isLogin && <button style={{ marginLeft: '200px', borderRadius: '20px', height: '40px', width: '150px', backgroundColor: 'green', color: 'white' }}>Purchase</button>
            }

        </div>
    )
}

export default Header