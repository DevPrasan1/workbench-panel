console.log("In components/IconsPanelView");
import * as React from 'react';

function Icons() {
  return (
    <nav className="my-navbar">
      <i className="fa fa-file-o" id="explorer" />
      <i className="fa fa-search"/>
      <i className="fa fa-code-fork"/>
    </nav>
  );
}

export default Icons;
