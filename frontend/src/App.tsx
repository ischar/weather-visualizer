import { useState } from 'react'
import WeatherCard from './components/WeatherCard'


const App: React.FC = () => {
  const [temp] = useState<number>(0);
  const today = new Date();
  console.log(today);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-800">
      <header className="h-15 mt-8 items-center text-center">
        <div className="flex justify-center">
          <p className="font-sans text-neutral-900 dark:text-neutral-100 text-3xl text-center">{temp}</p>
          <p className="font-sans text-neutral-900 dark:text-neutral-100 text-xl">°</p>
        </div>
      </header>
      <main>
        <div>
          <WeatherCard />
        </div>
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default App
