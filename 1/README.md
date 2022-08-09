# Ejercicio 1

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que
nos devuelve el código es el mismo valor en cada iteración.

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
   por consola el script? ¿Cuál es el motivo?

Se mostrará por consola 5 veces el número 5. Esto se debe a que `var` es function scoped, por lo que en cada iteracción del `for loop`, esta se actualiza a si misma con el nuevo valor de `i`, tal que al momento de ejecutarse la función dentro del `setTimeout`, esta muestra por consola el último valor de `i`.

2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas…
   ¿Cómo solucionarías el fragmento de código para que el output sea el deseado?

La solución sería cambiar `var` por `let`, de esta manera al ser let locally scoped, el loop funciona como se desea.

```
    > 0
    > 1
    > 2
    > 3
    > 4
```
