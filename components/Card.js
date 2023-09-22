import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card">
      <img className="CardBackground" src={props.src}></img>
      <div className="CardTitle">{props.name}</div> 
      <div>이것은 카드입니다.</div>
    </div>       
  )
}
