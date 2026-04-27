"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function RootError(props: ErrorProps) {
  const { error, reset } = props;

  return (
    <section>
      <h2>Root Error Boundary</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </section>
  );
}
