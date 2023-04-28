import EmployeeDetail from "./EmployeeDetail";
import "./Employee.css";
import "./EmployeeDetail.css"

function Employee(props) {
    return(
        <div className="employee">
            <div className="employee-detail">
                <h1>name</h1>
                <h1>age</h1>
                <h1>phone</h1>
            </div>
            <EmployeeDetail
                name={props.items[0].name}
                age={props.items[0].age}
                phone={props.items[0].phone}
            />
            <EmployeeDetail
                name={props.items[1].name}
                age={props.items[1].age}
                phone={props.items[1].phone}
            />
            <EmployeeDetail
                name={props.items[2].name}
                age={props.items[2].age}
                phone={props.items[2].phone}
            />
        </div>
    );
}

export default Employee;