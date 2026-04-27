import type { ReactNode } from "react";
import Link from "next/link";

type LabLayoutProps = {
  children: ReactNode;
  analytics: ReactNode;
  team: ReactNode;
};

export default function LabLayout(props: LabLayoutProps) {
  const { children, analytics, team } = props;

  return (
    <section>
      <h1>Lab Layout</h1>
      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <Link href="/lab">Lab Home</Link>
        <Link href="/lab/users/1">User 1</Link>
        <Link href="/lab/users/0">User 0 (not-found)</Link>
        <Link href="/lab?error=1">Force Error</Link>
      </nav>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        <div>{children}</div>
        <aside>
          <h3>Parallel Slots</h3>
          <div>{analytics}</div>
          <div>{team}</div>
        </aside>
      </div>
    </section>
  );
}
