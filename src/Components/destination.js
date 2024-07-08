import { DestinationData } from "./destinationData";
import "./destinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours Give You The Opportunity To See A Lot,WithIn A Time Frame</p>

      <DestinationData
        className="first-des"
        heading="Amber Fort"
        brief=" A majestic fort with a hilltop setting and an opulent palace within
            its premises – that’s Amber Fort and Palace for you. One of the most
            iconic forts in Jaipur, Amber Fort is steeped in history and remains
            a glorious example of architectural brilliance. The fort includes
            magnificent structures like the Sheesh Mahal, Shukh Niwas, and the
            Diwan-e-Khas or Hall of Private Audience. The light and sound show
            held here every evening brings alive the fort and its history, which
            is something you must not miss out on."
        img1="https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1iZXIlMjBmb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        img2="https://images.unsplash.com/photo-1524309784716-6a4be8299c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1iZXIlMjBmb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Nahargarh Fort"
        brief=" Located on the mighty Aravalli Range, Nahargarh Fort offers spectacular views of the city of Jaipur. Once upon a time, the fort was part of the city’s three-point defense strategy, which included the Amer Fort and the Jaigarh Fort as well. Today, this imposing structure is a prime attraction for the travelers visiting the city, thanks to its glorious past of almost 300 years and its vantage position. Are you fascinated? Include this fort in your itinerary when you step out of your hotels in Jaipur to explore the many magnificent marvels dotting the Pink City of India."
        img1="https://jaipurtourism.co.in/images/places-to-visit/header/nahargarh-fort-jaipur-entry-fee-timings-holidays-reviews-header.jpg"
        img2="https://im.whatshot.in/content/2016/Mar/1458625684-mg-1514.jpg"
      />
      <DestinationData
        className="first-des"
        heading="World Trade Park"
        brief="The World Trade Park Mall is a shopper’s paradise. Though it is a relatively new shopping destination in the city, it has quickly become one of the favorite shopping malls in Jaipur. With well-known brands like Calvin Klein, Marks n Spencer, Celio, Zara, and others selling their merchandise here, you can have an amazing shopping experience at this mall. Also, there are a number of top-class restaurants to take care of your hunger when you are tired from all that shopping."
        img1="https://www.walk2mall.com/wp-content/uploads/2017/10/Jaipur-world-trade-park..jpg"
        img2="https://pbs.twimg.com/media/Ee06U8sUEAAAYTm?format=jpg&name=large"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Birla Temple"
        brief="Also known as Laxmi Narayan Temple, the Birla Temple is one of the most magnificent temples in Jaipur. Built with resplendent white marble stones, the temple stands against the backdrop of lush greenery and presents a breath-taking sight. The walls of the temple are ornamented with various scenes and quotes from the Bhagavad Gita. This grand place of worship looks spellbinding when illuminated at night."
        img1="https://media-cdn.tripadvisor.com/media/photo-s/12/c4/53/64/on-pourrait-presque-definir.jpg"
        img2="https://hindi.holidayrider.com/wp-content/uploads/2019/03/optimized-zcue.jpg  "
      />
      <DestinationData
        className="first-des"
        heading="Dolls Museum"
        brief="With an amazing collection of dolls of all shapes and sizes, the place holds much attraction for kids and adults alike. You can find dolls dressed in ethnic attires of various states in the country. Even bridal clothing and dance outfits of different states are exhibited through the dolls here. What’s more, dolls wearing the traditional dresses of Malaysia, Mexico, Germany, America, Sweden, Britain, and various other countries are displayed at this one-of-its-kind museum."
        img1="https://im.whatshot.in/img/2020/Jun/scan30012-1591249240.jpg"
        img2="https://www.trawell.in/admin/images/upload/472763927Chandigarh_International_Dolls_Museum_Main.jpg"
      />
    </div>
  );
};
export { Destination };
