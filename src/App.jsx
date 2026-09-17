import Countries from "./components/Countries/Countries"
import { Suspense } from 'react'
import './App.css'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())

export default function App(){
  return(
    <>
    <Suspense fallback={<p>Data is loading...</p>}>
    <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
    </>
  )
}