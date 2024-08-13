
import './App.css'
import Stepper from './components/Stepper'

const steps = [
  {
    label: 'personal',
    content: <div>personal</div>
  },
  {
    label: 'account',
    content: <div>account</div>
  },
  {
    label: 'payment',
    content: <div>payment</div>
  },
  {
    label: 'confirmation',
    content: <div>confirmation</div>
  },
  {
    label: 'review',
    content: <div>review</div>
  }

]

function App() {

  return (
    <>
      <Stepper steps={steps} />
    </>
  )
}

export default App
