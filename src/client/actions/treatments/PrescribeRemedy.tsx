import * as React from "react";
import { connect } from "react-redux";
import { setPatientTreatmentDialogIsOpen } from "../../redux/actions/patient";
import { Theme, RootState } from "../../types";

export interface PrescribeRemedyProps {
  handleCloseTreatmentDialog: () => void;
  theme: Theme;
}

const PrescribeRemedy: React.SFC<PrescribeRemedyProps> = (
  props: PrescribeRemedyProps
) => {
  const { handleCloseTreatmentDialog, theme } = props;

  return (
    <>
      <p className="title" id="treatment-dialog-title">
        Prescribe Remedy
      </p>
      <p>TREATMENT DIALOG CONTEXT</p>
      <menu className="dialog-menu">
        <button
          className="nes-btn is-primary"
          id="treatment-dialog-primary"
          onClick={() => handleCloseTreatmentDialog()}
        >
          PRIMARY
        </button>
        <button
          className="nes-btn"
          id="treatment-dialog-secondary"
          onClick={() => handleCloseTreatmentDialog()}
        >
          SECONDARY
        </button>
      </menu>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({ theme: state.ui.theme });

const mapDispatchToProps = (dispatch) => ({
  handleCloseTreatmentDialog: () =>
    dispatch(setPatientTreatmentDialogIsOpen(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrescribeRemedy);
