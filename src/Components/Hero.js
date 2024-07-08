import "./HeroStyle.css";
export const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="Home Image" />
      </div>
      <div className="hero-text">
        <h1 className="mid-h1">{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.btnText}</a>
      </div>
    </>
  );
};
