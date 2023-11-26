import React from 'react'

function Header() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'red', height: '60px', alignItems: 'center' }}>
            <div class='labelContainer' style={{ display: 'flex', flexDirection: 'row', padding: '50px' }}>
                <a href='' style={{ marginRight: '50px' }}>HOME</a>
                <a href='' style={{ marginRight: '50px' }}>ABOUT</a>
                <a href='' style={{ marginRight: '50px' }}>SERVICES</a>
                <a href='' style={{ marginRight: '50px' }}>SHOWCASE</a>
                <a href='' style={{ marginRight: '50px' }}>BLOG</a>
                <a href='' style={{ marginRight: '50px' }}>CONTACT</a>
            </div>
            <button style={{ marginLeft: '200px', borderRadius: '20px', height: '40px', width: '150px', backgroundColor: 'green', color: 'white' }}>Purchase</button>
        </div>
    )
}

export default Header