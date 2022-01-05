export default function Table(props) {
  return (
    <div className="userTable">
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Telephone</th>
          <th>Note</th>
        </tr>
        <tr>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.telephone}</td>
          <td>{props.note}</td>
        </tr>
      </table>
    </div>
  );
}
