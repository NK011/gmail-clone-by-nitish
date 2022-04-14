import React from 'react'
import './SectionOptions.css'

function SectionOptions({ Icon, title, style }) {
    return (
        <div className="section" style={style}>
            <Icon />
            <p>{title}</p>
        </div>
    )
}

export default SectionOptions
