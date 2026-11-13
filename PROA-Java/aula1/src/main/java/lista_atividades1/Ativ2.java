package lista_atividades1;
import java.util.Scanner;

public class Ativ2 {
    public static void main(String[] args) {

        float raio;
        float pi = 3.1415F;

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite a medida do raio de um circulo em Cm: ");
        raio = sc.nextFloat();

        float perimetro = (2 * pi * raio);
        float area = pi * (raio*raio);

        System.out.printf("A medida do perimetro do circulo é: %.2f%n",perimetro,"cm");
        System.out.printf("A medida da area do circulo é: %.2f%n",area,"cm");
    }
}
