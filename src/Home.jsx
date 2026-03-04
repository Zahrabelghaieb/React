import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-5">
      <h1>Home Page</h1>
      <p>Discover our events and activities.</p>

      <div className="d-flex justify-content-center gap-3">
        <a href="/events" className="btn btn-primary">
          Events List
        </a>

        <Button variant="primary" onClick={() => navigate("/events")}>
          Go to Events
        </Button>
      </div>
    </div>
  );
}