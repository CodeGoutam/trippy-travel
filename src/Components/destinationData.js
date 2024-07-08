import "./destinationStyles.css";
const DestinationData = (props) => {
    return (
    <div className={props.className}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p style={{ textAlign:props.className==="first-des"?"start":"end" }}>{props.brief}</p>
      </div>
      <div className="img">
        <img src={props.img1} alt={props.heading} />
        <img src={props.img2} alt={props.heading} />
      </div>
    </div>
  );
};
export { DestinationData };
