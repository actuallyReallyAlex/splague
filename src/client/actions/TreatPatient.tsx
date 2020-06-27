import * as React from "react";
import { connect } from "react-redux";
import { setAlert } from "../redux/actions";
import { Operation, Remedy, RootState, Theme, Treatment } from "../types";

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
  name: string;
  operation: Operation;
  remedy: Remedy;
  theme: Theme;
}

const TreatPatient: React.SFC<TreatPatientProps> = (
  props: TreatPatientProps
) => {
  const {
    age,
    chat,
    complaint,
    handleAlert,
    name,
    operation,
    remedy,
    theme,
  } = props;

  const treatments: Treatment[] = [
    {
      handler: () =>
        handleAlert(
          "Prescribe Remedy",
          "PRESCRIBE REMEDY",
          () => null,
          "OK",
          () => null,
          null
        ),
      name: "remedy",
      text: "Prescribe Remedy",
    },
    {
      handler: () =>
        handleAlert(
          "Perform Operation",
          "PERFORM OPERATION",
          () => null,
          "OK",
          () => null,
          null
        ),
      name: "operation",
      text: "Perform Operation",
    },
    {
      handler: () =>
        handleAlert(
          "Chat",
          "CHAT",
          () => null,
          "OK",
          () => null,
          null
        ),
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
});

export default connect(mapStateToProps, mapDispatchToProps)(TreatPatient);
