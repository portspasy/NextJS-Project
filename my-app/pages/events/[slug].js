import { useRouter } from "next/router";

const EventPage = () => {
  const router = useRouter();

  console.log(router);

  return (
    <div className="event-page-style">
      <h1>Event Page Component</h1>
    </div>
  );
};

export default EventPage;
