import type { ReactNode } from "react";

export default function LabTemplate(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <div style={{ border: "1px dashed #999", padding: 12 }}>
      <p>Template rendered at: {new Date().toISOString()}</p>
      {children}
    </div>
  );
}
