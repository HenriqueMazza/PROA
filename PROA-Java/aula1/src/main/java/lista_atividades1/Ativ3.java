package lista_atividades1;
import java.util.Scanner;

public class Ativ3 {
    public static void main(String[] args) {

        float base, altura;

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite a medida da base do triangulo em Cm: ");
        base = sc.nextFloat();

        System.out.println("Digite a medida da altura do triangulo em Cm: ");
        altura = sc.nextFloat();

        float area = (base * altura)/2;

        System.out.printf("A area do triangulo é de: %.2f%n",area,"cm");

    }
}
