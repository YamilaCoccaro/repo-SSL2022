#include <iostream>
#include <stdlib.h>
#include <string.h>
using namespace std;

int main() {
	int i, cantPersonas,c, costo,w,j;
	char r;
	string nombres[100];
	string insumos[7]={"carne","achuras","pan","vino","cerveza","postre","ensalada"};
	int costos[100];
	char check[100];
	string z;

	printf("ingrese la cantidad de personas en el asado: ");
	scanf("%d",&cantPersonas);
	
	//Llenar array de nombres
	for(i=0; i<cantPersonas; i++) {
		cout << "ingrese nombre: "<< endl;
		cin >> z;
		nombres[i]=z;
	}
	//Array de costos con ceros
	for(i=0; i<=cantPersonas; i++) {
		costos[i]=0;
	}
	//Pedir importes y quien consumio cada cosa
	for(j=0; j<7; j++){
		cout << "cuanto costo " <<insumos[j] << ":" << endl;
		cin >> c;
		if(c >0) {

		for(i=0; i<cantPersonas; i++) {
			cout << nombres[i] << " consumio " << insumos[j]<< "?(s/n): "<< endl;
			cin >> r;
			check[i]=r;
		}
		
		w=0;
		for(i=0; i<cantPersonas; i++) {
			if(check[i] == 's') {
				w++;
			}
		}
		costo= c/w;
		
		for(i=0; i<cantPersonas; i++) {
			if(check[i] == 's') {
				costos[i]=costos[i]+costo;
			}
		}
	}
}

	printf("\n");
	for(i=0; i<cantPersonas; i++) {
		cout << nombres[i] << " gasto "<< costos[i] << endl;
	}
	
}
