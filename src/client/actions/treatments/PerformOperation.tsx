import * as React from "react";
import { connect } from "react-redux";
import {
  setPatientTreatmentDialogIsOpen,
  setPatientSelectedOperation,
} from "../../redux/actions/patient";
import { startPatientOperation } from "../../redux/thunks";
import { Theme, RootState, Operation } from "../../types";
import { operations } from "../../constants";

export interface PerformOperationProps {
  handleCloseTreatmentDialog: () => void;
  handleOperationSelect: (string) => void;
  handleOperationStart: () => void;
  operationInProgress: boolean;
  operationProgress: number;
  selectedOperation: Operation;
  theme: Theme;
}

const PerformOperation: React.SFC<PerformOperationProps> = (
  props: PerformOperationProps
) => {
  const {
    handleCloseTreatmentDialog,
    handleOperationSelect,
    handleOperationStart,
    operationInProgress,
    operationProgress,
    selectedOperation,
    theme,
  } = props;

  return (
    <>
      <p className="title" id="treatment-dialog-title">
        Perform Operation
      </p>

      <label htmlFor="operation-select">Select Operation to Perform</label>
      <div className={`nes-select ${theme === "dark" ? "is-dark" : ""}`}>
        <select
          defaultValue=""
          id="operation-select"
          onChange={(e) => {
            handleOperationSelect(e.target.value.replace(/-/gm, " "));
          }}
          required
        >
          <option hidden value="">
            Select...
          </option>
          {operations.map((operation: Operation, i: number) => (
            <option key={i} value={operation.replace(/ /gm, "-")}>
              {operation.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <span id="operation-in-progress">
        Operation In Progress - {operationInProgress ? "true" : "false"}
      </span>

      {operationInProgress && (
        <progress
          className="nes-progress is-primary"
          id="operation-progress"
          max="100"
          value={operationProgress}
        />
      )}

      <menu className="dialog-menu">
        <button
          className={`nes-btn is-primary ${
            !selectedOperation ? "is-disabled" : ""
          }`}
          disabled={!selectedOperation}
          id="start-operation"
          onClick={() => {
            handleOperationStart();
          }}
        >
          Start Operation
        </button>
        <button
          className="nes-btn is-secondary"
          id="treatment-dialog-secondary"
          onClick={() => handleCloseTreatmentDialog()}
        >
          Cancel
        </button>
      </menu>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  operationInProgress: state.patient.operationInProgress,
  operationProgress: state.patient.operationProgress,
  selectedOperation: state.patient.selectedOperation,
  theme: state.ui.theme,
});

const mapDispatchToProps = (dispatch) => ({
  handleCloseTreatmentDialog: () =>
    dispatch(setPatientTreatmentDialogIsOpen(false)),
  handleOperationSelect: (operation: Operation) =>
    dispatch(setPatientSelectedOperation(operation)),
  handleOperationStart: () => dispatch(startPatientOperation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PerformOperation);
