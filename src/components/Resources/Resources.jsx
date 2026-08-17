import './Resources.css'

// Renders one resource group (Section 7): a table of Resource / Type / Note.
// Files are hosted in the Knowledge Hub; this page links into it.
function Resources({ title, rows }) {
  return (
    <div className="resource-group">
      <h3>{title}</h3>
      <table className="resource-table">
        <thead>
          <tr>
            <th>Resource</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.resource}>
              <td>{row.resource}</td>
              <td>{row.type}</td>
              <td>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Resources
