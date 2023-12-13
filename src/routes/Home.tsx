import Header from "../components/Header";
import ExperienceSection from "../components/experienceSection";
import HighLightsMenu from "../components/highLightsMenu";
import ReservationSection from "../components/reservationSection";
import EventSections from "../components/eventSections/index";

export default function Home() {
  return (
    <div>
      <Header/>
      <ExperienceSection/>
      <HighLightsMenu/>
      <EventSections/>
      <ReservationSection/>
    </div>
  )
}
