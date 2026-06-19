import Container from "@/components/layout/Container";

export default function Loading() {
  return (
    <div
      className="flex flex-1 items-center justify-center py-32"
      role="status"
      aria-label="Loading page content"
    >
      <Container className="flex flex-col items-center gap-4">
        <div
          className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"
          aria-hidden="true"
        />
        <p className="text-body-sm text-neutral-600">Loading...</p>
      </Container>
    </div>
  );
}
