import { useParams } from "react-router-dom";
import patientsDatas from "../../service/patientsDatas";
import { MdOutlineFemale, MdOutlineMale } from "react-icons/md";
import img from '../../assets/user.png'

function PatientCard() {
  const { id } = useParams();
  console.log(id);

  const patient = patientsDatas().filter((patient) => patient.id === parseInt(id))[0];

  if (!patient) {
    return <div className="text-center text-red-500">Patient not found!</div>;
  }

  return (
    <section className="section_container">
      <div className="patient_card">
        <p className="card_id">patient ID: <span className="text-red-600">#{patient.id}</span></p>
        <div className="card_img">
          <img src={img} alt="user-image" />
        </div>
        <div className="patient_info">
          <h1 className="info_header">{patient.name}
            <span>{patient.gender} {patient.gender === "male" ? <MdOutlineMale /> : <MdOutlineFemale />}</span>
          </h1>
          <p>age: {patient.age}</p>
        </div>
        <div className="patient_status">
          <h2 className="status_title">medical condition</h2>
          <p className="status_desc">{patient.medicalCondition}</p>
        </div>
      </div>
    </section>
  );
};

export default PatientCard;
