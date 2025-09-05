import Form from "react-bootstrap/Form";

export default function Exercise2() {
  return (
    <div style={{ width: "400px", display: "flex", flexDirection: "column", gap: "12px", margin:"40px" }}>
      
      <Form.Control size="lg" type="text" placeholder="Input cỡ lớn" />

      <Form.Control type="text" placeholder="Input cỡ trung bình" />

      <Form.Control size="sm" type="text" placeholder="Input cỡ bé" />
    </div>
  );
}
