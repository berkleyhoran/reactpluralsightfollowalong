import React from 'react'

class HouseFilter extends Component {
    state = {}

    onSearchChange = (e) => {
        const country = e.target.value;
        this.props.filterHouses(country)
    }
    render() {
        const search;
        return (
            <div> It works</div>
        )
    }
}

export default house-filter;