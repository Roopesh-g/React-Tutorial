import React from "react"

import Header from "./components/Header"
import MainComponent from "./components/MainContent"
import Footer from "./components/Footer"

const content = (
    <div>
        <Header />
        <MainComponent />
        <Footer />
    </div>
)

class App extends React.Component {
    render() {
        return content
    }
}

export default App