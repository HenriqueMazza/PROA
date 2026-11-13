package lista_atividades1;
import java.util.Scanner;

public class Ativ5 {
    public static void main(String[] args) {

        int quantidade;
        double preco;

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite a quantidade comprada: ");
        quantidade = sc.nextInt();

        System.out.println("Digite o preco pago pela unidade: ");
        preco = sc.nextDouble();

        double total = preco * quantidade;

        if (quantidade <= 10) {
            System.out.printf("O valor total a ser pago é: %.2f reais%n", total);
        } else {
            total = total * 0.9;
            System.out.printf("O valor total com 10%% de desconto é: %.2f reais%n", total);
        }

    }
}