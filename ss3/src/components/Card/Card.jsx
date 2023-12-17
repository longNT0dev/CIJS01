import React from 'react'

function Card({ urlImage, description }) {
    return (
        <div style={{ width: '225px', height: '275px', flexGrow: 0, border: '1px solid #cccccc', borderRadius: '8px' }}>
            <img src={urlImage} width="50" height="50" style={{ borderRadius: '50%'}} />
            <div>
                {description}
            </div>
            <button>Xem chi tiết</button>
        </div>
    )
}

export default Card