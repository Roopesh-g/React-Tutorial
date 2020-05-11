import React from "react"
import ReactDOM from "react-dom"

const el = (
    <div>
        <h1>
            Roopesh
        </h1>
        <p>I'm a software Engineer</p>
        <ol>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Bangalore</li>
        </ol>
    </div>
)
function  FunctionComp2() {
    return el;
}

export default FunctionComp2