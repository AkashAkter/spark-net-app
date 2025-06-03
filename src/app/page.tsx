export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-3xl font-normal text-[var(--secondary)] mb-4">
          Welcome
        </h1>
        <p className="text-lg text-[var(--secondary)] opacity-80 mb-8">
          Our website is currently under development
        </p>
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-[var(--primary)] h-1 rounded-full"
            style={{ width: "45%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
