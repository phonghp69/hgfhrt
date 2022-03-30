import React from "react";
function DisableAfterClick() {
  const [disable, setDisable] = React.useState(false);

  return (
    <button disabled={disable} onClick={() => setDisable(true)}>
      Click to Disable!
    </button>
  );
}
export default DisableAfterClick