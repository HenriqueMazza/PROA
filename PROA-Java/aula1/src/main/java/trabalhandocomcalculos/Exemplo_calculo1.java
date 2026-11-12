package trabalhandocomcalculos;

import java.util.Scanner;

public class Exemplo_calculo1 {
    public static void main(String[] args) {
        int numero1;
        int numero2;

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite o primeiro numero: ");
        numero1 = sc.nextInt();

        System.out.println("Digite o segundo numero: ");
        numero2 = sc.nextInt();

        int soma = (numero1 + numero2);

        System.out.println("O resultado da soma dos dois numeros é: "+soma);

    }
}
