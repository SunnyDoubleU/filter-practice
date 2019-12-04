import React, { Component } from 'react'

export default class StudentList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>{this.props.students.firstname}</h1>
            </div>
        )
    }
}
