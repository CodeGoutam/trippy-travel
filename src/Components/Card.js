import './CardStyles.css'
const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="imgDiv">
          <img src={props.image} />
        </div>
        <div>
          <h4>{props.title}</h4>
          <p>{props.brief}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
