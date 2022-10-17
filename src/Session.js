import React from "react";

function Session(sessions) {
  return (
    <div className="session">
      {sessions.map((session, index) => {
        return (
          <div>
            <Session {...session} key={index} />
          </div>
        );
      })}
    </div>
  );
}

export default Session;
