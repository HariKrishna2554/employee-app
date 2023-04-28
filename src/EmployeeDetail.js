import './EmployeeDetail.css';

function EmployeeDetail(props) {
    return (
        <div className="employee-detail">
                <h2 className='employee-name'>{props.name}</h2>
                <h2 className='employee-age'>{props.age}</h2>
                <h2>{props.phone}</h2>
        </div>
    );
}

export default EmployeeDetail;