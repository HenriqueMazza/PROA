package lista_atividades1;
import java.util.Scanner;

public class Ativ1 {
    public static void main(String[] args) {

        float n1,n2;
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite  o primeiro numero: ");
        n1 = sc.nextFloat();
        System.out.println("Digite  o segundo numero: ");
        n2 = sc.nextFloat();

        float soma = n1 + n2;
        float sub = n1 - n2;
        float multi = n1 * n2;
        float div = n1 / n2;

        System.out.println("O resultado da soma entre os dois nuemros é: "+soma);
        System.out.println("O resultado da subtracao entre os dois nuemros é: "+sub);
        System.out.println("O resultado da multiplicacao entre os dois nuemros é: "+multi);
        System.out.printf("O resultado da divisao entre os dois nuemros é: %.2f%n", div);

    }
}
