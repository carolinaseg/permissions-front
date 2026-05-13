type Permission = {
  id: number;
  name: string;
  description: string;
  active: boolean;
};

type Props = {
  permissions: Permission[];
};

const PermissionList = ({ permissions }: Props) => {
  return (
    <div>
      <h2>Permissions</h2>

      <table border={1} cellPadding={5} cellSpacing={0}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td>{permission.name}</td>
              <td>{permission.description}</td>
              <td>{permission.active ? "🟢 Active" : "🔴 Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionList;