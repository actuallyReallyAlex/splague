import * as React from "react";
import { connect } from "react-redux";
import { Remedy, RootState } from "../types";

export interface TreatPatientProps {
  age: number;
  chat: string[];
  complaint: string;
  name: string;
  remedy: Remedy;
}

const TreatPatient: React.SFC<TreatPatientProps> = (
  props: TreatPatientProps
) => {
  const { age, chat, complaint, name, remedy } = props;
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
      <h3>Treatment Options</h3>
      <button id="treatment-remedy" onClick={() => alert("PRESCRIBE REMEDY")}>
        Prescribe Remedy
      </button>
      <button
        id="treatment-operation"
        onClick={() => alert("PERFORM OPERATION")}
      >
        Perform Operation
      </button>
      <button id="treatment-chat" onClick={() => alert("CHAT")}>
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
  remedy: state.patient.remedy,
});

export default connect(mapStateToProps)(TreatPatient);
