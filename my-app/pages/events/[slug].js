import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const EventPage = () => {
  const router = useRouter();

  console.log(router);

  return (
    <Layout title="Single Event Page">
      <h1>Single Event Page Component</h1>
    </Layout>
  );
};

export default EventPage;
