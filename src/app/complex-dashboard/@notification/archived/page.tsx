import { Card } from "@/components/Card";
import Link from "next/link";

export default function ArchiveNotication() {
  return (
    <Card>
      <div>
        <h1 className="bold text-2xl">Archived Notication</h1>
        <Link className="text-blue-500" href="/complex-dashboard">Complex dashboard</Link>
      </div>
    </Card>
  );
}
