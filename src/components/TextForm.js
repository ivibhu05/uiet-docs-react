import React from 'react'
import dropdown from './dropdown'


export default function TextForm() {
   
    return (
        <div>
            this is it
            <dropdown />
            <div className="mb-3">
                {/* <label for="mybox" class="form-label">Example textarea</label> */}
                <textarea class="form-control" id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary">Convert To Uppercase</button>
        </div>
    )
}
