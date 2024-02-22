import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteShoeAction, updateAmount } from './redux/action'

class Cart extends Component {
    render() {
        return (
            <div className="col-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>amount</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* render with map */}'
                        {
                            this.props.cart.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>
                                            <strong>{item.price * item.amount} $</strong>
                                        </td>
                                        <td>
                                            <button className="btn-dark" onClick={() => { this.props.handleUpdateAmount(item.id, "decrease") }}>-</button>
                                            <strong>{item.amount}</strong>
                                            <button className="btn-warning" onClick={() => { this.props.handleUpdateAmount(item.id, "increase") }}>+</button>
                                        </td>
                                        <td><img src={item.image} alt='' style={{ width: 80, }} /></td>
                                        <td><button className="btn-danger" onClick={() => { this.props.handleDeleteShoe(item.id) }}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleUpdateAmount: (shoeId, play) => {
            dispatch(updateAmount(shoeId, play))
        },
        handleDeleteShoe: (id) => {
            dispatch(deleteShoeAction(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);