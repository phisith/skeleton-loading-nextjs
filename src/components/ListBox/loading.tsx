export default function Loading() {
  return (
    <div className="relative animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-4 bg-slate-500 rounded"></div>
        <div className="h-4 bg-slate-500 rounded"></div>
        <div className="h-4 bg-slate-500 rounded"></div>
        <div className="h-4 bg-slate-500 rounded"></div>
        <div className="h-4 bg-slate-500 rounded"></div>
      </div>
    </div>
  );
}
