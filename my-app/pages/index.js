import Link from "next/link";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

export default function HomePage({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Home Page Component</h1>

      {events.length === 0 && <h3>There are no events!</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href={`/events`}>
          <a className="btn">View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`); // sorted by date (ASC) and limited to latest 3 events

  const events = await res.json();

  return {
    props: { events }, // will be passed to the page component as props
    revalidate: 1, // In seconds
  };
}
