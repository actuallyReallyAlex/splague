import * as React from "react";
import { connect } from "react-redux";
import {
  setPatientSelectedRemedy,
  setPatientTreatmentDialogIsOpen,
} from "../../redux/actions/patient";
import { startPatientRemedy } from "../../redux/thunks";
import { remedies } from "../../constants";
import { Remedy, RemedyOutcome, RootState, Theme } from "../../types";

export interface PrescribeRemedyProps {
  handleCloseTreatmentDialog: () => void;
  handleRemedySelect: (string) => void;
  handleRemedyStart: () => void;
  remedyInProgress: boolean;
  remedyOutcome: RemedyOutcome;
  remedyProgress: number;
  selectedRemedy: Remedy;
  theme: Theme;
}

const PrescribeRemedy: React.SFC<PrescribeRemedyProps> = (
  props: PrescribeRemedyProps
) => {
  const {
    handleCloseTreatmentDialog,
    handleRemedySelect,
    handleRemedyStart,
    remedyInProgress,
    remedyOutcome,
    remedyProgress,
    selectedRemedy,
    theme,
  } = props;

  return (
    <>
      <p className="title" id="treatment-dialog-title">
        Prescribe Remedy
      </p>

      {!remedyInProgress && !remedyOutcome && (
        <>
          <label htmlFor="remedy-select">Select Remedy to Create</label>
          <div className={`nes-select ${theme === "dark" ? "is-dark" : ""}`}>
            <select
              defaultValue=""
              id="remedy-select"
              onChange={(e) => {
                handleRemedySelect(e.target.value.replace(/-/gm, " "));
              }}
              required
            >
              <option hidden value="">
                Select...
              </option>
              {remedies.map((remedy: Remedy, i: number) => (
                <option key={i} value={remedy.replace(/ /gm, "-")}>
                  {remedy.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      {remedyInProgress && (
        <progress
          className="nes-progress is-primary"
          id="remedy-progress"
          max="100"
          value={remedyProgress}
        />
      )}

      {remedyOutcome && (
        <span id="remedy-outcome">{remedyOutcome.toUpperCase()}</span>
      )}

      {!remedyInProgress && !remedyOutcome && (
        <menu className="dialog-menu">
          <button
            className={`nes-btn is-primary ${
              !selectedRemedy ? "is-disabled" : ""
            }`}
            disabled={!selectedRemedy}
            id="start-remedy"
            onClick={() => {
              handleRemedyStart();
            }}
          >
            Create Remedy
          </button>
          <button
            className="nes-btn is-secondary"
            id="cancel-remedy"
            onClick={() => handleCloseTreatmentDialog()}
          >
            Cancel
          </button>
        </menu>
      )}

      {remedyOutcome && (
        <menu className="dialog-menu">
          <button
            className="nes-btn is-primary"
            id="ok"
            onClick={() => handleCloseTreatmentDialog()}
          >
            OK
          </button>
        </menu>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  remedyInProgress: state.patient.remedyInProgress,
  remedyOutcome: state.patient.remedyOutcome,
  remedyProgress: state.patient.remedyProgress,
  selectedRemedy: state.patient.selectedRemedy,
  theme: state.ui.theme,
});

const mapDispatchToProps = (dispatch) => ({
  handleCloseTreatmentDialog: () =>
    dispatch(setPatientTreatmentDialogIsOpen(false)),
  handleRemedySelect: (remedy: Remedy) =>
    dispatch(setPatientSelectedRemedy(remedy)),
  handleRemedyStart: () => dispatch(startPatientRemedy()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrescribeRemedy);
