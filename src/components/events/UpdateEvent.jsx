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

  useEffect(() => {
    getallEvents(id).then((res) => {
      setForm(res.data);
    });
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editEvent(id, form);
    navigate("/events");
  };

  return (
    <div>
      <h2>Modifier l'événement</h2>

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
          />
        </div>

        <br />
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default UpdateEvent;