import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../types";

export interface TreatPatientProps {
  age: number;
  complaint: string;
  name: string;
}

const TreatPatient: React.SFC<TreatPatientProps> = (
  props: TreatPatientProps
) => {
  const { age, complaint, name } = props;
  return (
    <div id="treat-patient-screen">
      <h2>Treat Patient</h2>
      <span id="patient-name">{name}</span>
      <span id="patient-age">{age}</span>
      <span id="patient-complaint">{complaint}</span>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  age: state.patient.age,
  complaint: state.patient.complaint,
  name: state.patient.name,
});

export default connect(mapStateToProps)(TreatPatient);
