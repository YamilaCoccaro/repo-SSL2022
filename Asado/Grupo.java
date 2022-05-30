package Asado;

public class Grupo {
	
	private int cantParticipantes;
	private int[][] preferencias;//matriz de 7 pref. x cant de personas
	private String[] nombres;
	private int[][] gastos;//matriz de 8 gastos x cant de personas (7 por c/insumo + 1 por el total)
	
	public Grupo() {
	}
	
	public Grupo(int cant) {
		
		this.cantParticipantes=cant;
		this.nombres= new String[cant];
		this.preferencias=new int[7][cant];
		this.gastos=new int[8][cant];
	}
	
	//Setters
	public void setNombre(String nom, int i) {
		this.nombres[i]=nom;
	}
	
	public void setPreferencias (int pref, int i, int j) {
		this.preferencias[i][j]=pref;
	}

	public void calcularGastos (int[] importes) {
		int i, j, cont=0;
		int temp;
		for(j=0;j<7;j++) {
			for(i=0;i<this.cantParticipantes;i++) {
				if(this.preferencias[j][i]==1) {
					cont++;		
				}
			}
			temp=(importes[j])/cont;
						
			for(i=0;i<this.cantParticipantes;i++) {
				if(this.preferencias[j][i]==1) {
					this.gastos[j][i]=temp;					
				}
			}
			cont=0;
		}
		if(j==7) {
			for(i=0;i<this.cantParticipantes;i++) {
				for(int k=0;k<7;k++) {
					this.gastos[7][i]+=this.gastos[k][i];
				}
			}
		}
	}
	
	//Getters
	public int[][] getPreferencias () {
		return this.preferencias;
	}
	public String getNombre(int i) {
		return this.nombres[i];
	}
	public int getGasto(int i, int j) {
		return this.gastos[i][j];
	}
}