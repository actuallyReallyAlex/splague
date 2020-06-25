import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../types";

export interface TreatPatientProps {
  age: number;
  name: string;
}

const TreatPatient: React.SFC<TreatPatientProps> = (
  props: TreatPatientProps
) => {
  const { age, name } = props;
  return (
    <div id="treat-patient-screen">
      <h2>Treat Patient</h2>
      <span id="patient-name">{name}</span>
      <span id="patient-age">{age}</span>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  age: state.patient.age,
  name: state.patient.name,
});

export default connect(mapStateToProps)(TreatPatient);
