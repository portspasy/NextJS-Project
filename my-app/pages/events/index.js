import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

export default function EventsPage({ events }) {
  // console.log(events);
  return (
    <Layout title="Events Page">
      <h1>Events</h1>

      {events.length === 0 && <h3>There are no events!</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);

  const events = await res.json();

  return {
    props: { events }, // will be passed to the page component as props
    revalidate: 1, // In seconds
  };
}
