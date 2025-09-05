import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Exercise3() {
  return (
    <div style={{ display: "flex", gap: "20px", margin:"40px" }}>
      {/* Cart 1 */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://512pixels.net/wp-content/uploads/2019/02/18-air-open.jpg" />
        <Card.Body>
          <Card.Title>MacBook Air 2018</Card.Title>
          <Card.Text>
            The reason I am selling the machine is because it is too much power for what I need
          </Card.Text>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Button variant="primary">Xem chi tiết</Button>
            <span>30.000.000 đ</span>
          </div>
        </Card.Body>
      </Card>

      {/* Cart 2 */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://cdn.mos.cms.futurecdn.net/8uwpNdGs6GweNo7v9xwVA7.jpg" />
        <Card.Body>
          <Card.Title>MacBook Pro 2019</Card.Title>
          <Card.Text>
            The reason I am selling the machine is because it is too much power for what I need.
          </Card.Text>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Button variant="primary">Xem chi tiết</Button>
            <span>30.000.000 đ</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
