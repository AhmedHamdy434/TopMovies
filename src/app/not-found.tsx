import Link from "next/link";

const notFound = () => {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center gap-4">
      <h2 className="text-[32px] font-bold">404</h2>
      <p className="text-[24px]">Page not Found</p>
      <Link href="/" className="btn">
        Home
      </Link>
    </div>
  );
};

export default notFound;
