import * as React from "react";
import { connect } from "react-redux";
import {
  setPatientTreatment,
  setPatientTreatmentDialogIsOpen,
} from "../redux/actions/patient";
import Chat from "./treatments/Chat";
import PerformOperation from "./treatments/PerformOperation";
import PrescribeRemedy from "./treatments/PrescribeRemedy";
import {
  Operation,
  Remedy,
  RootState,
  Theme,
  Treatment,
  TreatmentType,
  OperationOutcome,
  RemedyOutcome,
} from "../types";

export interface TreatPatientProps {
  age: number;
  chat: string[];
  complaint: string;
  handleOpenTreatmentDialog: () => void;
  handleTreatmentSelect: (treatment: TreatmentType) => void;
  name: string;
  operation: Operation;
  operationOutcome: OperationOutcome;
  remedy: Remedy;
  remedyOutcome: RemedyOutcome;
  theme: Theme;
  treatment: TreatmentType;
  treatmentDialogIsOpen: boolean;
}

const TreatPatient: React.SFC<TreatPatientProps> = (
  props: TreatPatientProps
) => {
  const {
    age,
    chat,
    complaint,
    handleOpenTreatmentDialog,
    handleTreatmentSelect,
    name,
    operation,
    operationOutcome,
    remedy,
    remedyOutcome,
    theme,
    treatment,
    treatmentDialogIsOpen,
  } = props;

  const treatments: Treatment[] = [
    {
      dialogContent: <PrescribeRemedy />,
      handler: () => {
        handleTreatmentSelect("remedy");
        handleOpenTreatmentDialog();
      },
      isDisabled: remedyOutcome !== null,
      name: "remedy",
      text: "Prescribe Remedy",
    },
    {
      dialogContent: <PerformOperation />,
      handler: () => {
        handleTreatmentSelect("operation");
        handleOpenTreatmentDialog();
      },
      isDisabled: operationOutcome !== null,
      name: "operation",
      text: "Perform Operation",
    },
    {
      dialogContent: <Chat />,
      handler: () => {
        handleTreatmentSelect("chat");
        handleOpenTreatmentDialog();
      },
      isDisabled: false,
      name: "chat",
      text: "Chat",
    },
  ];
  return (
    <div id="treat-patient-screen">
      <h2>Treat Patient</h2>
      <div
        className={`nes-container with-title flex-col ${
          theme === "dark" ? "is-dark" : ""
        }`}
      >
        <p className="title" id="patient-name">
          {name}
        </p>
        <span id="patient-age">AGE: {age}</span>
        <span id="patient-complaint">COMPLAINT: {complaint}</span>
        <h3 style={{ marginTop: "25px" }}>Treatment Options</h3>
        <table
          className={`nes-table is-bordered is-centered ${
            theme === "dark" ? "is-dark" : ""
          }`}
        >
          <tbody>
            <tr>
              {treatments.map((treatment: Treatment, i: number) => (
                <td key={`treatment-${i}`} style={{ width: "250px" }}>
                  <button
                    className={`nes-btn ${
                      treatment.isDisabled ? "is-disabled" : ""
                    }`}
                    disabled={treatment.isDisabled}
                    id={`treatment-${treatment.name}`}
                    onClick={treatment.handler}
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "100%",
                    }}
                  >
                    {treatment.text}
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Container */}
      <div
        className={`dialog-container ${treatmentDialogIsOpen ? "" : "hidden"}`}
      >
        {/* Dialog */}
        <dialog
          className={`dialog-inner nes-dialog ${
            theme === "dark" ? "is-dark" : ""
          }`}
          id="treatment-dialog"
        >
          {treatment &&
            treatments.find(
              (possibleTreatment: Treatment) =>
                possibleTreatment.name === treatment
            ).dialogContent}
        </dialog>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  age: state.patient.age,
  chat: state.patient.chat,
  complaint: state.patient.complaint,
  name: state.patient.name,
  operation: state.patient.operation,
  operationOutcome: state.patient.operationOutcome,
  remedy: state.patient.remedy,
  remedyOutcome: state.patient.remedyOutcome,
  theme: state.ui.theme,
  treatment: state.patient.treatment,
  treatmentDialogIsOpen: state.patient.treatmentDialogIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  handleOpenTreatmentDialog: () =>
    dispatch(setPatientTreatmentDialogIsOpen(true)),
  handleTreatmentSelect: (treatment: TreatmentType) =>
    dispatch(setPatientTreatment(treatment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TreatPatient);
