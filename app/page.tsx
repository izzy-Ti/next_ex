import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl">Hello devs</h1>
      <h2><Link href="/users">User</Link></h2>
    </>
  );
}
