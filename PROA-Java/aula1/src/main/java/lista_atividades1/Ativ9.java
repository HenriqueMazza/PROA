package lista_atividades1;
import java.util.Scanner;

public class Ativ9 {
    public static void main(String[] args) {

        double depositoMensal, taxaJuros;
        double valorTotal = 0;

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite o valor do seu depósito mensal em reais: ");
        depositoMensal = sc.nextDouble();

        System.out.println("Digite a taxa de juros mensal");
        taxaJuros = sc.nextDouble();

        for (int i = 1; i <= 12; i++) {

            valorTotal = valorTotal + depositoMensal;

            double rendimento = valorTotal * (taxaJuros/ 100);
            valorTotal = valorTotal + rendimento;

            System.out.printf("Valor acumulado no mês %d é de: R$ %.2f%n", i, valorTotal);
        }

        System.out.printf("%nMontante final após 12 meses: R$ %.2f%n", valorTotal);
        sc.close();
    }
}