const container = document.getElementById("container");
const shadowRoot = container.attachShadow({ mode: "open" });

shadowRoot.innerHTML = `
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid black;
          padding: 8px;
          text-align: center;
        }
        button {
          margin: 2px;
        }
      </style>
      <h1>Move Table Rows</h1>
      <table id="table">
        <thead>
          <tr>
            <th>Row</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1</td>
            <td>
              <button class="up">Up</button>
              <button class="down">Down</button>
              <button class="top">Top</button>
              <button class="bottom">Bottom</button>
            </td>
          </tr>
          <tr>
            <td>Row 2</td>
            <td>
              <button class="up">Up</button>
              <button class="down">Down</button>
              <button class="top">Top</button>
              <button class="bottom">Bottom</button>
            </td>
          </tr>
          <tr>
            <td>Row 3</td>
            <td>
              <button class="up">Up</button>
              <button class="down">Down</button>
              <button class="top">Top</button>
              <button class="bottom">Bottom</button>
            </td>
          </tr>
          <tr>
            <td>Row 4</td>
            <td>
              <button class="up">Up</button>
              <button class="down">Down</button>
              <button class="top">Top</button>
              <button class="bottom">Bottom</button>
            </td>
          </tr>
          <tr>
            <td>Row 5</td>
            <td>
              <button class="up">Up</button>
              <button class="down">Down</button>
              <button class="top">Top</button>
              <button class="bottom">Bottom</button>
            </td>
          </tr>
        </tbody>
      </table>
    `;

function moveRowInShadowDOM(action) {
  const shadowTable = shadowRoot.querySelector("table tbody");
  const rows = Array.from(shadowTable.querySelectorAll("tr"));
  const selectedRow = rows[0];

  if (action === "up" && rows.indexOf(selectedRow) > 0) {
    shadowTable.insertBefore(selectedRow, rows[rows.indexOf(selectedRow) - 1]);
  } else if (action === "down" && rows.indexOf(selectedRow) < rows.length - 1) {
    shadowTable.insertBefore(rows[rows.indexOf(selectedRow) + 1], selectedRow);
  } else if (action === "top" && rows.indexOf(selectedRow) > 0) {
    shadowTable.insertBefore(selectedRow, rows[0]);
  } else if (
    action === "bottom" &&
    rows.indexOf(selectedRow) < rows.length - 1
  ) {
    shadowTable.appendChild(selectedRow);
  }
}
