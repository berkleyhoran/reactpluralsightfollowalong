import React from 'react'

const FeaturedHouse = (props) => {
    if (props.house) return (
        <div>It works</div>
    )
    return ( <div>No Props</div> )
}