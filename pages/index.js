export default function Home({ data }) {
  return (
    <div>
      <h1 className="title">How many times visited?</h1>
      <div className="block glow">
        <p>{data}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from our API route
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/views`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
