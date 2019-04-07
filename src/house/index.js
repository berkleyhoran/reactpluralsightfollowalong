import React, { Component } from 'react'
import './house'

class index extends Component {
    state = {}
    render() {
        const house = this.props.house
        return (
            <div>Its Working!!{house}</div>
        )
    }
}

export default index;