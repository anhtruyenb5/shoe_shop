import React, { Component } from 'react'
import Cart from './Cart'
import List from './List'
import Detail from './Detail'

export default class ShoeShop extends Component {
    render() {
        return (
            <div className="row w-100">
                <Cart
                />
                <List
                />
                <Detail />
            </div>
        )
    }
}
