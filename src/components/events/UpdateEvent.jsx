import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getallEvents, editEvent } from "../../services/api";

function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    nbTickets: "",
  });

  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await getallEvents(id);
        setForm(res.data);
      } catch (err) {
        setError("Erreur lors du chargement des données");
      } finally {
        setLoadingData(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await editEvent(id, {
        ...form,
        price: Number(form.price),
        nbTickets: Number(form.nbTickets),
      });

      navigate("/events");
    } catch (err) {
      setError("Erreur lors de la mise à jour");
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Modifier l'événement</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label><br />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Description :</label><br />
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Prix :</label><br />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <div>
          <label>Nombre de tickets :</label><br />
          <input
            type="number"
            name="nbTickets"
            value={form.nbTickets}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Mise à jour..." : "Mettre à jour"}
        </button>
      </form>
    </div>
  );
}

export default UpdateEvent;