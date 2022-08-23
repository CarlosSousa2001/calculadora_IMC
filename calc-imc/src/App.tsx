import { useState } from 'react'
import styles from './App.module.css'
import powerIMage from './assets/powered.png'
import {GridItem} from './components/GridItem/'
import leftArrowImage from "./assets/leftarrow.png"
import {levels, calculateImc, Level} from "./helpers/imc"

const App  = () => {

  const [heightField, setHeightField] = useState<number>()
  const [weightField, setWeightField] = useState<number>()
  const [toShow, setToShow] = useState<Level | null>(null)



 const handleCalculateButton = () =>{
  if(heightField && weightField){
    setToShow(calculateImc(heightField, weightField));
  } else {
    alert("Digite todos os campos")
  }
 }
 const handleBackButton = () => {
  setToShow(null)
  setHeightField(0)
  setWeightField(0)
 }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
       <img src={powerIMage} alt="" width={150}/>
       </div>
      </header>

    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Calcule o seu IMC</h1>
        <p>IMC é a sigla para Índice de Massa
           Corpórea, parâmetro adotado pela Organização Mundial de 
           Saúde para calcular o peso ideal de cada pessoa.
        </p>
        <input
        placeholder='Digite sua altura. Ex 1.8 (em métros)'
        type="number"
        value={heightField}
        onChange={event => setHeightField(parseFloat(event.target.value))}
        disabled={toShow ? true : false}
       />

        <input
        placeholder='Digite seu peso. Ex 60.8 (em kg)'
        type="number"
        value={weightField}
        onChange={event => setWeightField(parseFloat(event.target.value))}
        disabled={toShow ? true : false}
        />

        <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
      </div>
      <div className={styles.rightSide}>
        {!toShow &&
        <div className={styles.grid}>
          {levels.map((item, key)=>(
            <GridItem key={key} item={item} />
          ))}
        </div>
         }
         {toShow &&
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBackButton}>
          <img src={leftArrowImage} width="25" alt="" />
            </div>
            <GridItem item={toShow}/>
          </div>
         }
      </div>
    </div>


    </div>
  )
}

export default App;
