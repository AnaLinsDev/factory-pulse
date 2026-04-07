import Link from "next/link";
export default function NavBar() {
  return (
    <div className="flex justify-between items-center font-bold w-full p-2 px-12 bg-navbar text-foreground shadow">
      <h1>FactoryPulse</h1>

      <div className="flex gap-4 px-4 py-2 ">
        <Link href="/" className="p-2 rounded-xs hover:text-navbar-link">
          Dashboard
        </Link>
        <Link
          href="/machines"
          className="p-2 rounded-xs hover:text-navbar-link"
        >
          Machines
        </Link>
        <Link href="/orders" className="p-2 rounded-xs hover:text-navbar-link">
          Orders
        </Link>
      </div>
    </div>
  );
}
