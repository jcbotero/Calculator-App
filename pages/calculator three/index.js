import styles from '/styles/Home.module.css'
import React from 'react'



class CalThree extends React.Component {
    constructor(props) {
        super(props);
        this.show = React.createRef(); // React.createRef() funciona como un .document.getbyid... es mas sencillo para manipular el DOM
        this.display = this.display.bind(this);
        this.clear = this.clear.bind(this);
        this.operacion = this.operacion.bind(this);
        this.back = this.back.bind(this);
    };
        display(value) {
        this.show.current.value += value; // debo poner .current  para que me tome el valor de este id (ref)
      } // el parametro valio lo asigno aqui y en el boton asi .bind(this,"7")... para que me lo agarre como el valor de ese botón
      
      clear() {
        this.show.current.value = "";
        }
       
     operacion() {
         let screen =  this.show.current.value;
         let result = eval(screen); // eval() hace que se evaluen argumentos en una expresion de code, como hay signos de + - * .. los evalua como operaciones.
         this.show.current.value = result;
        }

        back() {
            this.show.current.value  = this.show.current.value.slice(0, -1) ;
          }
          
       render() {
        return (
            <>
             <div className={styles.calone} id={styles.calthree} >
                <div>
                    <input  ref={this.show} className={styles.input4}  value=""/>
                </div>
                <div className={styles.gridcal} id={styles.gridcal3}>
                    <div className={styles.botones} id={styles.botones3}>
                    <button className={styles.number} onClick={this.display.bind(this,"7")} value="7">7</button>
                        <button className={styles.number} onClick={this.display.bind(this,"8")} value="8">8</button>
                        <button className={styles.number} onClick={this.display.bind(this,"9")} value="9">9</button>
                        <button className={styles.back} onClick={this.back}>DEL</button>
                        <button className={styles.number} onClick={this.display.bind(this,"4")} value="4">4</button>
                        <button className={styles.number} onClick={this.display.bind(this,"5")} value="5">5</button>
                        <button className={styles.number} onClick={this.display.bind(this,"6")} value="6">6</button>
                        <button className={styles.plus}  onClick={this.display.bind(this,"+")} value="+">+</button>
                        <button className={styles.number} onClick={this.display.bind(this,"1")} value="1">1</button>
                        <button className={styles.number} onClick={this.display.bind(this,"2")} value="2">2</button>
                        <button className={styles.number} onClick={this.display.bind(this,"3")} value="3">3</button>
                        <button className={styles.minus} onClick={this.display.bind(this,"-")} value="-">-</button>
                        <button className={styles.decimal} onClick={this.display.bind(this,".")} value="." >.</button>
                        <button className={styles.number} onClick={this.display.bind(this,"0")} value="0">0</button>
                        <button className={styles.division} onClick={this.display.bind(this,"/")} value="/">/</button>
                        <button className={styles.multi} onClick={this.display.bind(this,"*")} value="*">x</button>
                    </div>
                    <div className={styles.botonesf} id={styles.botonesf3}>
                        <button className={styles.reset} onClick={this.clear} id={styles.reset3}>RESET</button>
                        <button className={styles.equal} onClick={this.operacion} id={styles.equal3}>=</button>
                    </div>
                </div>
             </div>          
            </>
        )
    }}

    export default CalThree