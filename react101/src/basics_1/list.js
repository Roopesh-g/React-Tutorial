import React from "react"
import ReactDOM from "react-dom"

const element = (
    <div>
        <ul>
            <li>Food</li>
            <li>Music</li>
            <li>Reading</li>
        </ul>
    </div>
);

class List extends React.Component {
    render() {
        return element
    }
}

export default List;