import Header from "./components/Header";
import ExperienceSection from "./components/experienceSection";
import HighLightsMenu from "./components/highLightsMenu";
import EventSections from "./components/eventSections";
import ReservationSection from "./components/reservationSection";

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
