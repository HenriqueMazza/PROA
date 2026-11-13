package lista_atividades1;
import java.util.Scanner;

public class Ativ4 {
    public static void main(String[] args) {

        float nota1, nota2, nota3;

        float media;

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite a primeira nota (0 a 10): ");
        nota1 = sc.nextFloat() * 2;
        System.out.println("Digite a segunda nota (0 a 10): ");
        nota2 = sc.nextFloat() * 3;
        System.out.println("Digite a terceira nota (0 a 10): ");
        nota3 = sc.nextFloat() * 5;

        media = (nota1 + nota2 + nota3)/10;

        System.out.printf("A media ponderada do aluno é: %.2f%n",media);



    }
}
