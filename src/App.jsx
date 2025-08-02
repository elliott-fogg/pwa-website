function App() {
  return (
    <div className="min-h-screen flex flex-col text-center bg-gray-100 text-gray-800">
      <header className="bg-indigo-600 text-white py-4 shadow-md">
        <h1 className="text-xl font-semibold">Vibe App</h1>
      </header>

      <main className="flex-grow p-4">
        <p>Welcome to your installable PWA!</p>
        <p>Built for both mobile and desktop.</p>
      </main>

      <footer className="bg-gray-200 text-sm py-2">
        &copy; 2025 You & Your Girlfriend ❤️
      </footer>
    </div>
  );
}

export default App;
