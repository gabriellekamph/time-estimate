import { Row, Col } from "react-bootstrap";

// Interface for Form component 
interface Props {
    estimates: number[]; 
}

// Input form
const Report = (props: Props) => {

const { estimates } = props;

// calc lowest
const lowest = Math.min(...estimates);

// calc highest 
const highest = Math.max(...estimates);

// calc median 
const median = (estimates: any) => {
    const mid = Math.floor(estimates.length / 2),
      nums = [...estimates].sort((a, b) => a - b);
    return estimates.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };

// calc average 
const average = (estimates: any[]) => estimates.reduce((a: any,b: any) => a + b, 0) / estimates.length;
    
    return (
        <div className="report-conatiner">
            <Row>
                <Col sm="3">
                    <p>Lowest</p>
                    <h4>{lowest}</h4>
                </Col>
                <Col sm="3">
                    <p>Highest</p>
                    <h4>{highest}</h4>
                </Col>
                <Col sm="3">
                    <p>Median</p>
                    <h4>{median(estimates)}</h4> 
                </Col>
                <Col sm="3">
                    <p>Average</p>
                    <h4>{average(estimates)}</h4>
                </Col>
            </Row>
        </div>
    )
}

export default Report;
