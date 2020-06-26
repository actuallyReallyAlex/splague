import * as React from "react";
import { connect } from "react-redux";
import { setAlert } from "../redux/actions";
import { Operation, Remedy, RootState } from "../types";

export interface TreatPatientProps {
  age: number;
  chat: string[];
  complaint: string;
  handleAlert: (
    title: string,
    content: string,
    primaryAction: string,
    secondaryAction: string
  ) => void;
  name: string;
  operation: Operation;
  remedy: Remedy;
}

const TreatPatient: React.SFC<TreatPatientProps> = (
  props: TreatPatientProps
) => {
  const { age, chat, complaint, handleAlert, name, operation, remedy } = props;
  return (
    <div id="treat-patient-screen">
      <h2>Treat Patient</h2>
      <span id="patient-name">{name}</span>
      <span id="patient-age">{age}</span>
      <span id="patient-complaint">{complaint}</span>
      {chat.map((chatLine: string, i: number) => (
        <span id={`chat-${i}`} key={i}>
          {chatLine}
        </span>
      ))}
      <span id="patient-remedy">{remedy}</span>
      <span id="patient-operation">{operation}</span>
      <h3>Treatment Options</h3>
      <button
        className="nes-btn"
        id="treatment-remedy"
        onClick={() =>
          handleAlert("Prescribe Remedy", "PRESCRIBE REMEDY", "", "")
        }
      >
        Prescribe Remedy
      </button>
      <button
        className="nes-btn"
        id="treatment-operation"
        onClick={() =>
          handleAlert("Perform Operation", "PERFORM OPERATION", "", "")
        }
      >
        Perform Operation
      </button>
      <button
        className="nes-btn"
        id="treatment-chat"
        onClick={() => handleAlert("Chat", "CHAT", "", "")}
      >
        Chat
      </button>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  age: state.patient.age,
  chat: state.patient.chat,
  complaint: state.patient.complaint,
  name: state.patient.name,
  operation: state.patient.operation,
  remedy: state.patient.remedy,
});

const mapDispatchToProps = (dispatch) => ({
  handleAlert: (
    title: string,
    content: string,
    primaryAction: string,
    secondaryAction: string
  ) => dispatch(setAlert(title, content, primaryAction, secondaryAction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TreatPatient);
