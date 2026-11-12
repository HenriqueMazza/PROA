package trabalhandotiposdedados;
import java.util.Scanner; //Permite a entrada de dados externos no programa

public class Exemplo2 {
    public static void main(String[] args) {

        String nome;
        int idade;
        float altura;
        float peso;
        double salario;
        boolean formado;

        Scanner sc = new Scanner(System.in);

        System.out.println("Digite o seu nome: ");
        nome = sc.nextLine();

        System.out.println("Digite a sua idade: ");
        idade = sc.nextInt();

        System.out.println("Digite a sua altura: ");
        altura = sc.nextFloat();

        System.out.println("Digite seu peso: ");
        peso = sc.nextFloat();

        System.out.println("Digite seu salario: ");
        salario = sc.nextDouble();

        System.out.println("Tem ensino superior completo? (true or false)");
        formado = sc.nextBoolean();

        System.out.println("Seu nome é: "+nome);
        System.out.println("Sua idade é: "+idade);
        System.out.println("Sua altura é: "+altura);
        System.out.println("Seu peso é: "+peso);
        System.out.println("Seu salario é: "+salario);
        System.out.println("Tem ensino superior completo?: "+formado);


    }
}
