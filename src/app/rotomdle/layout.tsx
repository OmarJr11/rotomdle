import type { ReactNode } from "react";
export default function RotomdleLayout(props: { children: ReactNode }) {
  const { children } = props;
    return (
    <section className="min-h-full w-full flex flex-col items-center justify-center">
      {children}
    </section>
  )
}