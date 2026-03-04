import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../../services/api";

function AddEvent() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    nbTickets: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await addEvent({
        ...form,
        price: Number(form.price),
        nbTickets: Number(form.nbTickets),
      });

      // Reset form
      setForm({
        name: "",
        description: "",
        price: "",
        nbTickets: "",
      });

      navigate("/events");
    } catch (err) {
      setError("Erreur lors de l'ajout de l'événement");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Ajouter un événement</h2>

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
          {loading ? "Ajout en cours..." : "Ajouter"}
        </button>
      </form>
    </div>
  );
}

export default AddEvent;