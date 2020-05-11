import React from "react"

const content = (
    // className(JSX) is eqivalent to class (html property)
    <h1 className="navbar">This is Header</h1>
)
class Header extends React.Component {
    render() {
        return content
    }
}

export default Header