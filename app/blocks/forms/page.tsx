import { APP_DESCRIPTION, APP_NAME } from "@/lib/configs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Forms - ${APP_NAME}`,
  description: APP_DESCRIPTION,
};

export default function page() {
  return (
    <div className="min-h-screen">
      <div className="cpx space-y-2 py-5">
        <h1 className="font-medium font-heading text-2xl">Forms</h1>
        <p className="text-muted-foreground text-sm">Coming soon...</p>
      </div>
    </div>
  );
}
