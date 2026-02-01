

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <div>
      <h1>Users {slug} Page</h1>
    </div>
  );
};

export default Page;
