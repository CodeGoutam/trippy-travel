import "./ServicePageStyle.css";
import { ServiceData } from "./ServiceData";
import Card from "./Card";
const ServicePage = () => {
  return (
    <div>
      <h1 style={{marginTop:'1rem'}}>Featured Services</h1>
      <p>
        <b>Trippy Tour</b> offer unique taxi cab tours of Jaipur and nearby
        cities, so that you can maximise your time and energy whilst on holiday
        or business.
      </p>
     <div className="cards">
        {ServiceData.map((items) => {
          return (
            <Card image={items.image} title={items.title} brief={items.brief} />
          );
        })}
        </div>
    </div>
  );
};
export default ServicePage;
// https://jaipurprivatetour.com/assets/img/jaipur-taxi.jpg
