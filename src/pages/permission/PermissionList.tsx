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

      <ul>
        {permissions.map((permission) => (
          <li key={permission.id}>
            {permission.name} - {permission.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionList;