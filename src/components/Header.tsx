import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <div>
            <div className="flex m-2 justify-between items-center">
                <Link href="/">
                    <h1 className="text-xl font-bold"> Snippets</h1>
                </Link>
                <Link href="/snippets/new" className="border p-2 rounded">
                    New
                </Link>
            </div>
        </div>
    );
}
