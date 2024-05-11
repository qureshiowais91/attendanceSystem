const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'name', // Corresponds to the name field in your schema
    },
    {
        Header: 'Birthdate',
        accessor: 'birthdate', // Corresponds to the birthdate field in your schema
    },
    {
        Header: 'Classroom',
        accessor: 'classRoom.name', // Assuming you want to display the name of the classroom
        Cell: ({ value }) => value || 'N/A', // Handling cases where classroom is not defined
    },
    {
        Header: 'Parent',
        accessor: 'parent.name', // Assuming you want to display the name of the parent
        Cell: ({ value }) => value || 'N/A', // Handling cases where parent is not defined
    },
    {
        Header: 'Teacher',
        accessor: 'teacher.name', // Assuming you want to display the name of the teacher
        Cell: ({ value }) => value || 'N/A', // Handling cases where teacher is not defined
    },
    {
        Header: 'School',
        accessor: 'school.name', // Assuming you want to display the name of the school
        Cell: ({ value }) => value || 'N/A', // Handling cases where school is not defined
    },
];

export default COLUMNS;
