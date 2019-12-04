import React, { Component } from "react";
import students from "../data/students.json"
import { Link, Route } from "react-router-dom"
import StudentList from "../components/StudentList.js";
import StudentDetails from "../components/StudentDetails.js";

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: students,
            filteredStudents: students
        }
    }
    searchHandler = (e) => {
        var searchQuery = e.target.value
        var searchResult = this.state.students.filter((student) =>
            student.firstname.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        )

        this.setState({ filteredStudents: searchResult })
    }
    render() {
        return (
            <div>
                <input type="text" name="search" onChange={this.searchHandler} />
                <div>
                    {this.state.filteredStudents.map((student, index) =>
                        <Link to={`/students/${student.id}`}>
                            <StudentList
                                students={student}
                            />
                        </Link>
                    )}
                </div>

                <div>
                    <Route
                        path="/students/:id"
                        render={(props) => <StudentDetails {...props} students={this.state.students} />}
                    />

                </div>
            </div>
        )
    }
}