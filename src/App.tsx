import { useEffect, useState } from "react";
import { api } from "./api/client";
import { getPermissions } from "./service/permissions/permissions.services";

type Permission = {
  id: number;
  name: string;
  description: string;
  active: boolean;
};

function App() {
  const [permissions, setPermissions] = useState<Permission[]>([]);
  // const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePermission = async () => {
    try {
      await api.post("/permissions", {
        name,
        description,
        active: true,
      });

      setName("");
      setDescription("");

      const data = await getPermissions();

      setPermissions(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPermissions();
        setPermissions(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Create Permission</h2>

      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleCreatePermission}>
        Create
      </button>

      <h2>Permissions</h2>

      <ul>
        {permissions.map((p) => (
          <li key={p.id}>
            {p.name} - {p.description} {p.active ? "🟢" : "🔴"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;