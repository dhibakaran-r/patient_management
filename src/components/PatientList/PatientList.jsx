import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import patientsDatas from '../../service/patientsDatas'

function PatientList() {

    const navigate = useNavigate();
    const [patients, setPatients] = useState(patientsDatas);

    const handleDelete = (id) => {
        const updatedPatients = patients.filter((_, i) => i !== id);
        setPatients(updatedPatients);
    };

    const handleEdit = (id) => {
        const newName = prompt("Enter new name:", patients[id].name);
        const newAge = prompt("Enter new age:", patients[id].age);

        if (newName && newAge) {
            const updatedPatients = [...patients];
            updatedPatients[id] = { ...updatedPatients[id], name: newName, age: parseInt(newAge) };
            setPatients(updatedPatients);
        }
    };

    return (
        <section className="section_container">
            <table className="patient_table">
                <thead>
                    <tr className="table_head">
                        <th>patiend ID</th>
                        <th>name</th>
                        <th className="hidden md:table-cell">age</th>
                        <th className="hidden md:table-cell">genter</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient, index) => (
                        <tr key={index} className="text-center border border-gray-300">
                            <td>{patient.id}</td>
                            <td>{patient.name}</td>
                            <td className="hidden md:table-cell">{patient.age}</td>
                            <td className="hidden md:table-cell">{patient.gender}</td>
                            <td className="button_wrap">
                                {/* <Link to={`/patientCard/${patient.id}`} className='base_button green_button'>
                                    <span>view more</span><GoArrowUpRight />
                                </Link> */}
                                <button onClick={() => navigate(`/patientCard/${patient.id}`)} className='base_button green_button'>
                                    <span>view more</span><GoArrowUpRight />
                                </button>
                                <button
                                    className="base_button blue_button"
                                    onClick={() => handleEdit(index)}
                                >
                                    <span>Edit</span><MdOutlineEdit />
                                </button>
                                <button
                                    className="base_button red_button"
                                    onClick={() => handleDelete(index)}
                                >
                                    <span>Delete</span><MdOutlineDelete />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default PatientList