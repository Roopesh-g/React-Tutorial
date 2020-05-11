import React from "react"

import Header from "./basics_1/parentChild/components/Header"
import MainComponent from "./basics_1/parentChild/components/MainContent"
import Footer from "./basics_1/parentChild/components/Footer"

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