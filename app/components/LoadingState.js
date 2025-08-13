export default function LoadingState() {
  return (
    <div className="flex items-center justify-center min-h-[400px]" role="status">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-brand-green/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-brand-green rounded-full animate-spin border-t-transparent"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
