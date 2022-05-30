package Asado;


import java.util.Scanner;

public class Asado extends Grupo{
	
	final String[] PREFERENCIAS= new String[]{"Asado", "Achuras", "Pan", "Vino", "Cerveza", "Postre", "Ensalada", "Total"};
	int[] importes=new int[7];
	public Asado() {
	}


public static void main(String[] args){
	
	String rta;
	Asado asado= new Asado();
	Scanner scan = new Scanner (System.in);
	System.out.println("Ingrese la cantidad de participantes: ");
	int cant = scan.nextInt();
	Grupo grupo= new Grupo(cant);
	scan.nextLine();
	
	//Cargar todos los participantes con sus preferencias
	for(int i=0;i<cant;i++) {
		System.out.println("Ingrese el nombre del participante "+(i+1));
		grupo.setNombre((scan.nextLine()), i);
		
		for(int j=0;j<7;j++) {
			System.out.println("¿Consumió "+asado.PREFERENCIAS[j]+"?\n");
			rta=(scan.nextLine());
			if(rta.equalsIgnoreCase("si")) {
				grupo.setPreferencias(1,j, i);
			}
			else {
//				if(rta.equalsIgnoreCase("no") {
					grupo.setPreferencias(0,j, i);
//				}
			}
		}
	}
	
	//Cargar cuanto se pagó de cada cosa
	for(int i=0;i<7;i++) {
		System.out.println("¿Cuánto se pagó para "+asado.PREFERENCIAS[i]+"?");
		asado.importes[i]=(scan.nextInt());
	}
	
	//Cálculos
	grupo.calcularGastos(asado.importes);
	
	//Mostrar resultados
	System.out.printf("Total de gastos:\n");
	System.out.printf("%12s"," ");
	for(int i=0;i<8;i++) {
		System.out.printf("%12s",asado.PREFERENCIAS[i]);
	}
	System.out.println("\n");
	for(int j=0;j<cant;j++) {
		System.out.printf("%12s",grupo.getNombre(j));
		for(int i=0;i<8;i++) {
			System.out.printf("%12d",grupo.getGasto(i, j));
		}
		System.out.println("\n");	
	}
	scan.close();
}}