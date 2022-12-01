import Tripdata from "./tripdata";
import trip1 from "../../assets/5.jpg";
import trip2 from "../../assets/6.jpg";
import trip3 from "../../assets/9.jpg";
import "./tripstyle.css";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <Tripdata
          image={trip1}
          heading="Trip in Indenosia"
          text="Indenosia, Officially the republic of indenosia, is a country of southeast asia and oceaniabetween the Indian and pacific oceans. It consists of over 17,000 islands, including sumatra, java, sulawesi, and parts of Bornea and new Guinea"
        />
        <Tripdata
          image={trip2}
          heading="Trip in Malaysia"
          text="Indenosia, Officially the republic of indenosia, is a country of southeast asia and oceaniabetween the Indian and pacific oceans. It consists of over 17,000 islands, including sumatra, java, sulawesi, and parts of Bornea and new Guinea"
        />
        <Tripdata
          image={trip3}
          heading="Trip in France"
          text="Indenosia, Officially the republic of indenosia, is a country of southeast asia and oceaniabetween the Indian and pacific oceans. It consists of over 17,000 islands, including sumatra, java, sulawesi, and parts of Bornea and new Guinea"
        />
      </div>
    </div>
  );
}
export default Trip;