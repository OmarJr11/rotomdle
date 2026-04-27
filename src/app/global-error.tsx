"use client";

type GlobalErrorProps = {
  error: Error;
  reset: () => void;
};

export default function GlobalError(props: GlobalErrorProps) {
  const { error, reset } = props;

  return (
    <html lang="en">
      <body>
        <h1>Global Error</h1>
        <p>{error.message}</p>
        <button onClick={reset}>Retry</button>
      </body>
    </html>
  );
}
