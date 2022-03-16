import { Badge } from "react-bootstrap";

const CustomBadge = (props) => (
  <h2 className="ml-2">
    NEWS: <Badge variant={props.color}>{props.badge}</Badge>
  </h2>
);

export default CustomBadge;
