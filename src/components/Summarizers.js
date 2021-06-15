import React from 'react'

    const Summarizers= ({ summarizers }) => {
      return (
        <div>
          <center><h1>News List</h1></center>
          {summarizers.map((summarizer) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{summarizer[[0]]}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{summarizer[0]}</h6>
                <p class="card-text">{summarizer[2]}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Summarizers