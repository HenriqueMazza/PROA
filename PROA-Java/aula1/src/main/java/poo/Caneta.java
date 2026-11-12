package poo;

public class Caneta {
    public static void main (String[] args){
        ClasseCaneta caneta1 = new ClasseCaneta();

        caneta1.marca = "Bic";
        caneta1.cor = "Vermelho";
        caneta1.tipo = "Hidrográfica";
        caneta1.material = "plastico";
        caneta1.carga = 5;
        caneta1.ponta = 0.3F;
      //  caneta1.tampada = false;
        caneta1.preco = 3.50;

        caneta1.destampar();
        caneta1.estado();
        caneta1.escrever();
        caneta1.rabiscar();
    }
}
