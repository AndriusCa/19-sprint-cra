import "./LeftSidebar.css"
import logo from "../../img/a-logo.png"
import programLogo from "../../img/program-logo.png"
import stackLogo from "../../img/stack-logo.png"
import verticalStackLogo from "../../img/vertical-stack-logo.png"
import graphLogo from "../../img/graph-logo.png"

export function LeftSidebar() {
  return (
    <div className="aside">
      <img src={logo} alt="/" />
      <img src={programLogo} alt="/" />
      <img src={stackLogo} alt="/" />
      <img src={verticalStackLogo} alt="/" />
      <img src={graphLogo} alt="/" />
    </div>
  );
}

