import { useState } from 'react'
import { Button} from '@/components/ui/button'
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex items-center justify-center flex-col'>
      <Button 
        onClick={() => setCount(count + 1)}>
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Count +1
      </Button>
      <p>{count}</p>
    </div>
  )
}

export default App
