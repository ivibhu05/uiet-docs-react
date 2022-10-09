import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Dropdown = ({ title = '', options = [] }) => {

    const [active, setActive] = useState(false)

    return (
        <div>
            <div onMouseEnter={()=> setActive(true)} onMouseLeave={()=> setActive(false)} >
                {title}
            </div>

            <div id='dropdownMenu' className={active ? 'd-block': 'd-none'} >
                {
                    options.map(ele => (
                        <Link className="d-block" to={ele.path} >{ele.label}</Link>
                    ))
                }
            </div>
            
        </div>

    )
}

export default Dropdown
