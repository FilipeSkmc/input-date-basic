import { LightningElement } from "lwc";

export default class App extends LightningElement {
  //são os atributos da classe
    nome = "";
  telefone = "";
  //criei a variável email
  email = "";

  /**
   * eventé um parametro que irá receber as informações do]
   * objeto.
   */
  handleOnChangeNome(event){
    /**para acessar os valores inserido no campo
     * event.target.value
     */

    this.nome = event.detail.value;
    console.log("nome: " + this.nome);
  }

  handleOnChangeTelefone(event){
    this.telefone = event.detail.value;
    console.log("tel: " + this.telefone);
  }

  //criei a função para email
  handleOnChangeEmail(event){
    this.email = event.detail.value;
    console.log(event.target.value);
    console.log("email: " + this.email);
  }

 

  /**
   * onclick -> ao clicar executa uma ação
   * onmouseover -> mouse em cima do objeto executa uma ação
   * onchange -> ao sofrer mudança, executa uma ação
   */
}
