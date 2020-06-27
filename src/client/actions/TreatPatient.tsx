import * as React from "react";
import { connect } from "react-redux";
import { setAlert, setPatientTreatment } from "../redux/actions";
import Chat from "./treatments/Chat";
import PerformOperation from "./treatments/PerformOperation";
import {
  Operation,
  Remedy,
  RootState,
  Theme,
  Treatment,
  TreatmentType,
} from "../types";

export interface TreatPatientProps {
  age: number;
  chat: string[];
  complaint: string;
  handleAlert: (
    title: string,
    content: string,
    primaryAction: () => void,
    primaryActionText: string,
    secondaryAction: () => void,
    secondaryActionText: string
  ) => void;
  handleTreatmentSelect: (treatment: TreatmentType) => void;
  name: string;
  operation: Operation;
  remedy: Remedy;
  theme: Theme;
  treatment: TreatmentType;
}

const TreatPatient: React.SFC<TreatPatientProps> = (
  props: TreatPatientProps
) => {
  const {
    age,
    chat,
    complaint,
    handleAlert,
    handleTreatmentSelect,
    name,
    operation,
    remedy,
    theme,
    treatment,
  } = props;

  const treatments: Treatment[] = [
    {
      dialogContent: (
        <>
          <p className="title" id="treatment-dialog-title">
            Prescribe Remedy
          </p>
          <p>TREATMENT DIALOG CONTEXT</p>
          <menu className="dialog-menu">
            <button
              className="nes-btn is-primary"
              id="treatment-dialog-primary"
              onClick={() => null}
            >
              PRIMARY
            </button>
            <button
              className="nes-btn"
              id="treatment-dialog-secondary"
              onClick={() => null}
            >
              SECONDARY
            </button>
          </menu>
        </>
      ),
      handler: () => {
        handleTreatmentSelect("remedy");
        const treatmentDialog = document.getElementById(
          "treatment-dialog"
        ) as HTMLDialogElement;
        treatmentDialog.showModal();
      },
      name: "remedy",
      text: "Prescribe Remedy",
    },
    {
      dialogContent: <PerformOperation />,
      handler: () => {
        handleTreatmentSelect("operation");
        const treatmentDialog = document.getElementById(
          "treatment-dialog"
        ) as HTMLDialogElement;
        treatmentDialog.showModal();
      },
      name: "operation",
      text: "Perform Operation",
    },
    {
      dialogContent: <Chat />,
      handler: () => {
        handleTreatmentSelect("chat");
        const treatmentDialog = document.getElementById(
          "treatment-dialog"
        ) as HTMLDialogElement;
        treatmentDialog.showModal();
      },
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
                    className="nes-btn"
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

      <dialog
        className={`nes-dialog ${theme === "dark" ? "is-dark" : ""}`}
        id="treatment-dialog"
      >
        <form method="dialog">
          {/* TREATMENT DIALOG CONTENT */}
          {treatment &&
            treatments.find(
              (possibleTreatment: Treatment) =>
                possibleTreatment.name === treatment
            ).dialogContent}
        </form>
      </dialog>
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
  theme: state.ui.theme,
  treatment: state.patient.treatment,
});

const mapDispatchToProps = (dispatch) => ({
  handleAlert: (
    title: string,
    content: string,
    primaryAction: () => void,
    primaryActionText: string,
    secondaryAction: () => void,
    secondaryActionText: string
  ) =>
    dispatch(
      setAlert(
        title,
        content,
        primaryAction,
        primaryActionText,
        secondaryAction,
        secondaryActionText
      )
    ),
  handleTreatmentSelect: (treatment: TreatmentType) =>
    dispatch(setPatientTreatment(treatment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TreatPatient);
