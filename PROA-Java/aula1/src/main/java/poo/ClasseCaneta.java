package poo;

public class ClasseCaneta {
    String cor;
    String marca;
    String tipo;
    String material;
    int carga;
    float ponta;
    boolean tampada;
    double preco;

    // Metodo void = sem retorno
    void escrever() {
        if (carga > 0 && tampada == false) {
            System.out.println("A caneta esta escrevendo");
        } else {
            System.out.println("Nao consigo escrever! A caneta esta sem carga ou tampada");
        }
    }

    void rabiscar() {
        if (carga > 0 && tampada == false) {
            System.out.println("A caneta esta rabiscando");
        } else {
            System.out.println("Nao consigo rabiscar! A caneta esta sem carga ou tampada");
        }
    }

    void tampar(){
        tampada = true;
    }

    void destampar(){
        tampada = false;
    }


    void estado(){
        System.out.println("Esta caneta é da marca: " +marca);
        System.out.println("Esta caneta é da cor:  " +cor);
        System.out.println("Esta caneta é do tipo: " +tipo);
        System.out.println("Esta caneta é feita de: " +material);
        System.out.println("Esta caneta está com a carga em: " +carga+"%");
        System.out.println("Esta caneta tem a ponta: "+ponta);
        System.out.println("Esta caneta custa: "+preco+" reais");
        System.out.println("Esta caneta esta tampada? "+tampada);
    }

}
