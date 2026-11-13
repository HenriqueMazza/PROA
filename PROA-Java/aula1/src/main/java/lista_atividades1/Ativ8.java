package lista_atividades1;
import java.util.Scanner;

public class Ativ8 {
    public static void main(String[] args) {

        int n1, n2;
        int troca;

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite o primeiro numero: ");
        n1 = sc.nextInt();

        System.out.println("Digite o segundo numero: ");
        n2 = sc.nextInt();

        System.out.println("valor 1 = "+n1);
        System.out.println("valor 2 = "+n2);

        troca = n1;
        n1 = n2;
        n2 = troca;

        System.out.println("valor 1 trocado = "+n1);
        System.out.println("valor 2 trocado = "+n2);



    }
}
