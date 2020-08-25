 `use strict`

 function getSolutions(a, b, c) {
   let D = Math.pow(b, 2) - (4 * a * c);
   let x1;
   let x2;
   let solution = {
     D: D,
     roots: []
   }

   if (D > 0 ) {
     x1 = (-b + Math.sqrt(D)) / (2 * a);
     x2 = (-b - Math.sqrt(D)) / (2 * a);
     solution.roots[0] = x1;
     solution.roots[1] = x2;
   } else if (D === 0) {
     x1 = -b / 2 * a;
     solution.roots[0] = x1;
   }

   return solution
 }

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уровнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0)
    console.log(`Уравнение не имеет вещественных корнец`)
  else if (result.D === 0)
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`)
  else
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)

}
