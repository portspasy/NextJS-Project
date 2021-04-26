import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function HomePage({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Home Page Component</h1>
      {events.length === 0 && <h3>There are no events!</h3>}
      {events.map((evt) => (
        <img src={evt.image} style={{ maxWidth: "33%" }}></img>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);

  const events = await res.json();

  return {
    props: { events }, // will be passed to the page component as props
    revalidate: 1, // In seconds
  };
}
