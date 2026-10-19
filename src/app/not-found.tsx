import Link from "next/link";
export default function NotFound() {
  return (
    <section className="wrap px-5 py-24 text-center">
      <h1 className="text-5xl">Page not found</h1>
      <p>Let’s get you back to Prayer Feast 2026.</p>
      <Link className="btn" href="/">
        Back to home
      </Link>
    </section>
  );
}
