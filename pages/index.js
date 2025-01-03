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
  // Using absolute URL since relative URL wasn't working
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/views`, {
    method: "POST",
  });
  const data = await res.json();

  return { props: { data } };
}
