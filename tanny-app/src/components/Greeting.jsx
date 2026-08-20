function Greeting(props) {
  return <h2>สวัสดี {props.name}! คุณเรียนอยู่ชั้นปี {props.year}</h2>;
}

import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="ฝน" year={3} />
      <Greeting name="เต้ย" year={2} />
      <Greeting name="มายด์" year={4} />
    </div>
  );
}

export default Greeting ;