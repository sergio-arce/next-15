import { Card } from "@/components/Card";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <div>
        <h1 className="bold text-2xl">Notification</h1>
        <Link className="text-blue-500" href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}
