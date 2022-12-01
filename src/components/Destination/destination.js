import Destinationdata from "./destinationdata";
import mountain1 from "../../assets/14.jpg";
import mountain2 from '../../assets/15.jpeg';
import mountain3 from '../../assets/10.jpg';
import mountain4 from '../../assets/11.jpg';
import "./destinationstyle.css";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within atime frame.</p>
            <Destinationdata
              class="firstdes"
              h2="Taal Volcano, Batangas"
              p="one of the most iconic view of london, Mt. Taal boasts a volcano
              inside alake inside an island. If you fancy a closer look, the hike
              up to the crater is a mere 45 minutes, and is easy enough for
              beginners. Guides will assist you most of the way, and you will see
              the peculiar environment found on an active valcano, including
              volcanic rocks and steam vents. The hike can be dusty and hot, so
              plan for an early morning trip, and then unwind the some bulalo
              before back home!"
              img1={mountain1} img2={mountain2}
              />
            <Destinationdata
              class="firstdesrev"
              h2="Mt. Daguldul, Batangas"
              p="one of the most iconic view of london, Mt. Taal boasts a volcano
              inside alake inside an island. If you fancy a closer look, the hike
              up to the crater is a mere 45 minutes, and is easy enough for
              beginners. Guides will assist you most of the way, and you will see
              the peculiar environment found on an active valcano, including
              volcanic rocks and steam vents. The hike can be dusty and hot, so
              plan for an early morning trip, and then unwind the some bulalo
              before back home!"
              img1={mountain3} img2={mountain4}
              />
        </div>
    );
};
export default Destination;
