"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function LabError(props: ErrorProps) {
  const { error, reset } = props;

  return (
    <section>
      <h2>Lab Error Boundary</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </section>
  );
}
