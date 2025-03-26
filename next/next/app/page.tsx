import Link from "next/link";

export default function Home() {
    return <div>
       Random Application

        <Link href={"/signup"}>Sign up to this random application</Link>
        <Link href={"/signin"}>Sign in to this random application</Link>
    </div>
}1