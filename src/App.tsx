import { useEffect, useState } from "react";
import { api } from "./api/client";

type Permission = {
  id: number;
  name: string;
  description: string;
  active: boolean;
};

function App() {
  const [permissions, setPermissions] = useState<Permission[]>([]);
  // const [loading, setLoading] = useState(false);
  const controller = new AbortController();
  const url = "http://localhost:3000/permissions";

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const fetchPermissions = async () => {
  const res = await api.get(url, { signal: controller.signal });
    setPermissions(res.data);
  };

  const createPermission = async () => {
    try {
      await api.post(url, {
        name,
        description,
        active: true,
      });

      setName("");
      setDescription("");

      fetchPermissions();
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => { 
    fetchPermissions();
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

      <button onClick={createPermission}>
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