import React from 'react'

const sidebarItems = [
  'Home', 'War Room', 'AI', 'Data', 'Apps', 'Cloud', 'Devices', 'Users', 'Config'
]

const dashboardBoxes = [
  'Incoming Alerts',
  'AI Alert Analysis',
  'Outcomes',
  'Remediated',
  'Enterprise Heatmap',
  'Threat Trends',
  'At Risk'
]

export default function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-900 p-4 flex flex-col space-y-3">
        <div className="text-3xl font-bold text-purple-400 mb-8">A</div>
        {sidebarItems.map((item) => (
          <button key={item} className="text-left hover:bg-gray-800 px-3 py-2 rounded text-sm font-medium">
            {item}
          </button>
        ))}
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <div className="text-purple-400 text-2xl font-bold">Arbitium</div>
          <input
            className="bg-gray-800 text-white rounded px-4 py-2 w-1/2 placeholder:text-gray-400 text-sm"
            placeholder="Ask Arbitium AI..."
          />
          <div className="rounded-full bg-gray-700 h-10 w-10" />
        </header>

        {/* Dashboard */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-3 gap-4">
            {dashboardBoxes.map((box) => (
              <div key={box} className="bg-gray-900 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-1">{box}</h2>
                <p className="text-sm text-gray-400">Sample data for {box.toLowerCase()}.</p>
              </div>
            ))}
            <div className="col-span-3 bg-gray-900 p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-1">Pending Action</h2>
              <p className="text-sm text-gray-400">List of actions awaiting analyst review or approval.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
