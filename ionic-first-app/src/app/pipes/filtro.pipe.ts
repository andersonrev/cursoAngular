import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

    transform(arreglo: any[],
              texto: string = '',
              columna: string = 'title'
    ): any[] {
        console.log({arreglo, texto});
        if (texto === '') {
            return arreglo;
        }
        if (texto === 'DC Comics') {
            return arreglo.filter(
                heroe => heroe[columna] === texto
            );
        }
        if (texto === 'todos') {
            return arreglo;
        }
        if (!arreglo) {
            return arreglo;
        }
        texto = texto.toLocaleLowerCase();

        return arreglo.filter(
            item => item[columna].toLowerCase().includes(texto)
        );
    }

}
