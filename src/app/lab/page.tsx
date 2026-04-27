async function sleep(milliseconds: number): Promise<void> {
  await new Promise<void>((resolve: () => void) => {
    setTimeout(resolve, milliseconds);
  });
}

type LabPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function LabPage(props: LabPageProps) {
  const searchParams = await props.searchParams;

  await sleep(2400);

  if (searchParams.error === "1") {
    throw new Error("Forced error in /lab");
  }

  return <p>Lab main page loaded.</p>;
}
