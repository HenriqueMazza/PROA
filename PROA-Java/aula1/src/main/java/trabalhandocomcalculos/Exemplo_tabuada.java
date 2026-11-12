package trabalhandocomcalculos;

import java.util.Scanner;

public class Exemplo_tabuada {
    public static void main(String[] args) {

        int numero;

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite o numero inteiro para exibir a tabuada:  ");
        numero = sc.nextInt();

        for (int i = 1; i <= 10; i++) {

            int numerotabu = (numero * i);

            System.out.println(numero+" * "+i+" = "+numerotabu);

        }


    }
}
