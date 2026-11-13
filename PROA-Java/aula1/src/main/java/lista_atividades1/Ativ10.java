package lista_atividades1;
import java.util.Scanner;

public class Ativ10 {
    public static void main(String[] args) {

        int num, tabuada;

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite um numero inteiro para exibir a tabuada: ");
        num = sc.nextInt();

        for (int i = 1; i <= 10; i++) {

            tabuada = num * i;

            System.out.println(num+" * "+i+" = "+tabuada);

        }

    }
}
