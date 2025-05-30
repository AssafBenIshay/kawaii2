import React from 'react'
import '../subComponents/subComponentsCss/SubComponents.css'

export default function ColorHeader({ headerText, classNameHeader, classNameFont ='pacifico-regular' }) {
    const [colors] = React.useState([
        '#d63384',
        '#17a2b8',
        '#ffc107',
        '#7e36f4',
        '#fd7e14',
        '#4ab563',
    ])
    const [txt,setTxt] = React.useState(Array.from(headerText))

    return (
        <div className={`color-header ${classNameHeader}`}>

            {txt.map((letter,i) => (
                <span
                    style={{ color: `${colors[i % 5]}`, animationDelay: `${100 * i}ms` }}
                    key={i}
                    className={`wave-animate line-height ${classNameFont}`}
                >{letter !== " " ? letter : <span>&nbsp;</span>}</span>
            ))}
        </div>
    )
}

