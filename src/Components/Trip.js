import TripData from "./TripData";
import "./TripStyles.css";
const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image="https://www.fabhotels.com/blog/wp-content/uploads/2021/01/25.-Kanak-Vrindavan-Garden.jpg"
          heading="Kanak Vrindavan Garden"
          text="Located in a lush valley at the foothills of Nahargarh Hill, Kanak Vrindavan is a picturesque garden. The garden is said to have been built to resemble the original Vrindavan in Mathura, where Lord Krishna is believed to have spent his childhood. There’s even a lovely idol of Lord Krishna in this garden."
        />
        <TripData
          image="https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Jaipur1.jpg"
          heading="Ram Nivas Garden"
          text="Built by Maharaja Sawai Ram Singh, the Ram Nivas Garden is among the historically relevant tourist places in Jaipur you should not miss. The beautifully maintained and landscaped garden looks mystical and stunning post-sunset."
        />
        <TripData
          image="https://www.fabhotels.com/blog/wp-content/uploads/2021/01/33.-Chand-Baori-Stepwell.jpg"
          heading=" Chand Baori Stepwell"
          text="The Chand Baori Stepwell or the Abhaneri Stepwell and is an important place to visit in Jaipur. Built with intricate Jaipuri architecture, the stepwell has a total of 13 floors and about 3500 steps that include galleries filled with beautifully carved sculptures."
        />
      </div>
    </div>
  );
};
export default Trip;
