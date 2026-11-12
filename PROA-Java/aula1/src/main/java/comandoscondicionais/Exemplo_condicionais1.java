package comandoscondicionais;
import java.util.Scanner;

public class Exemplo_condicionais1 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("==== Calculo da média de 4 notas ====");

        System.out.println("Digite a primeira nota: ");
        int numero1 = sc.nextInt();

        System.out.println("Digite a segunda nota: ");
        int numero2 = sc.nextInt();

        System.out.println("Digite a terceira nota: ");
        int numero3 = sc.nextInt();

        System.out.println("Digite a quarta nota: ");
        int numero4 = sc.nextInt();

        float media = (numero1 + numero2 + numero3 + numero4)/4f;

        System.out.println("A media das 4 notas é: "+media);

        if (media>=6){
            System.out.println("Aluno aprovado!");
        } else {
            System.out.println("Aluno reprovado!");
        }


        }
}
