import React from 'react'

export default function StudentDetails(props) {
    var details = props.match.params.id
    var filteredStudent = props.students.filter((student) => student.id === details)[0]
    debugger
    return (
        <div>
            <h1>{filteredStudent.firstname}</h1>
            <h1>hello</h1>

        </div>
    )
}
