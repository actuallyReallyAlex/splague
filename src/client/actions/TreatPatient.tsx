import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../types";

export interface TreatPatientProps {
  name: string;
}

const TreatPatient: React.SFC<TreatPatientProps> = (
  props: TreatPatientProps
) => {
  const { name } = props;
  return (
    <div id="treat-patient-screen">
      <h2>Treat Patient</h2>
      <span id="patient-name">{name}</span>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({ name: state.patient.name });

export default connect(mapStateToProps)(TreatPatient);
