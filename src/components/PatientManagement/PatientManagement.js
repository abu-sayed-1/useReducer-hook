import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../PatientReducer/PatientReducer';

const PatientManagement = () => {
    const [state, dispatch] = useReducer(patientReducer, patientState);
    console.log(state)
    const nameRef = useRef();
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1
        });
    };
    return (
        <>
            <h1>Patient Management:{state.patients.length}</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} />
            </form>
            {
                state.patients.map(patientsData =>
                    <li
                     key={patientsData.id}
                     onClick={() => dispatch({type: 'REMOVE_PATIENT', id:patientsData.id})}
                    >
                        {patientsData.name}
                    </li>

                )
            }
        </>
    );
};

export default PatientManagement;


