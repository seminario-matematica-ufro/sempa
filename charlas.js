// ============================================================
//  CHARLAS DEL SEMINARIO
//  Para agregar una charla: copia un bloque { ... }, pégalo
//  dentro de la lista (con su coma al final) y cambia los datos.
//  También puedes usar la página nueva-charla.html, que arma
//  el bloque por ti.
//
//  - fecha: formato AAAA-MM-DD (las charlas futuras salen en
//    "Calendario" y las pasadas en "Charlas anteriores", solas).
//  - resumen: puedes pegar el texto tal cual, con fórmulas entre
//    $...$ (o $$...$$ para una ecuación destacada). Deja una
//    línea en blanco entre párrafos.
//  - Los campos colaboradores, referencias, diapositivas y video
//    son opcionales: bórralos si no los necesitas.
//  - diapositivas: ruta del PDF subido a la carpeta "diapositivas",
//    por ejemplo "diapositivas/2026-10-09-sandoval.pdf".
// ============================================================
const CHARLAS = [

  {
    fecha: "2026-10-09",
    hora: "15:40",
    lugar: "Auditorio Manuel López Ramírez, Departamento de Matemática y Estadística (UFRO)",
    titulo: "Aproximación y ortogonalidad en espacios de Sobolev ponderados en el triángulo",
    expositor: "Brayan Sandoval",
    procedencia: "Ingeniero Civil Matemático, Universidad de Concepción",
    colaboradores: "Leonardo E. Figueroa, Departamento de Ingeniería Matemática, Universidad de Concepción, Concepción, Chile.",
    resumen: String.raw`Introducimos los espacios de Lebesgue $\mathrm{L}^{2}_{\boldsymbol{\gamma}}$ y Sobolev $\mathrm{H}^{m}_{\boldsymbol{\gamma}}$ ponderados respecto a los productos interiores:

$$\begin{gathered}\langle f,g \rangle_{\boldsymbol{\gamma}} := \int_{\mathrm{T}} f(x)g(x)\ x_{1}^{\gamma_1}x_{2}^{\gamma_2}(1-x_{1}-x_{2})^{\gamma_3}\ \mathrm{d}x\quad \text{y}\\[6pt] \langle f,g\rangle_{\boldsymbol{\gamma};m} := \sum_{k=0}^{m}\langle \nabla^{k}f, \nabla^{k}g\rangle_{\boldsymbol{\gamma}},\end{gathered}$$

donde $\mathrm{T} := \{x\in\mathbb{R}^{2}:\ x_{1},x_{2}>0\ \wedge\ 1-x_{1}-x_{2}>0\}$ y $\boldsymbol{\gamma} = (\gamma_{1}, \gamma_{2},\gamma_{3})\in(-1,\infty)^{3}$. Espacios de este tipo aparecen naturalmente en el análisis de métodos de elementos finitos para problemas de difusión fraccionaria [6]. Históricamente, en el estudio de la aproximación polinomial en el triángulo, el símplex o la bola unitaria, el uso de proyectores ortogonales Lebesgue produce tasas de convergencia subóptimas cuando el error se mide en normas Sobolev [1, 2, 5].

En esta presentación nos enfocaremos en demostrar y caracterizar la existencia de un proyector ortogonal tipo Sobolev $S_{n}^{\boldsymbol{\gamma};\mathrm{S}}$ que satisface:

$$\begin{gathered}\left( \forall u \in \mathrm{H}^{m}_{\boldsymbol{\gamma}} \right)\quad \Vert \nabla u - \nabla S_{n}^{\boldsymbol{\gamma};\mathrm{S}}(u)\Vert_{\boldsymbol{\gamma}} \leq Cn^{1-m}\Vert u\Vert_{\boldsymbol{\gamma};m}\quad\text{y}\\[6pt] \Vert u - S_{n}^{\boldsymbol{\gamma};\mathrm{S}}(u) \Vert_{\boldsymbol{\gamma}} \leq Cn^{-m}\Vert u\Vert_{\boldsymbol{\gamma};m}.\end{gathered}\tag{1}$$

Para derivar estas cotas de aproximación, y siguiendo el enfoque de [4], definimos una familia de productos internos de tipo Sobolev.

Al centrarnos en las propiedades estructurales de los espacios —en lugar de construir bases explícitas, evitando así los extensos cálculos algebraicos usuales en el tratamiento de polinomios multivariados [3]— caracterizamos los espacios de polinomios ortogonales de Sobolev resultantes, $\mathcal{V}_{n}^{\boldsymbol{\gamma},\mathrm{S}}$. Asimismo, demostramos que los elementos de $\mathcal{V}_{n}^{\boldsymbol{\gamma},\mathrm{S}}$ son funciones propias de problemas explícitos de tipo Sturm-Liouville de segundo orden. Mediante este resultado y el uso de argumentos de tipo Aubin-Nitsche, derivamos la convergencia del proyector $S_{n}^{\boldsymbol{\gamma};\mathrm{S}}$ en su norma natural. Finalmente, empleando una desigualdad de tipo Hardy, obtenemos las cotas deseadas en (1).`,
    referencias: [
      String.raw`[1] G. A. Benavides y L. E. Figueroa, <em>Orthogonal polynomial projection error in Dunkl–Sobolev norms in the ball</em>, J. Approx. Theory <b>261</b> (2021), 105495.`,
      String.raw`[2] L. E. Figueroa, <em>Orthogonal polynomial projection error measured in Sobolev norms in the unit ball</em>, J. Approx. Theory <b>220</b> (2017), 31–43.`,
      String.raw`[3] L. E. Figueroa, <em>Weighted Sobolev Orthogonal Polynomials and Approximation in the Ball</em>, Constructive Approximation (2026).`,
      String.raw`[4] Y. Xu, <em>Approximation and orthogonality in Sobolev spaces on a triangle</em>, Constr. Approx. <b>46</b> (2017), 349–434.`,
      String.raw`[5] Y. Xu, <em>Approximation by polynomials in Sobolev spaces with Jacobi weight</em>, J. Fourier Anal. Appl. <b>24</b> (2018), 1438–1459.`,
      String.raw`[6] R. H. Nochetto, E. Otárola y A. J. Salgado, A PDE approach to fractional diffusion in general domains: a priori error analysis, <em>Found. Comput. Math.</em>, 15(3):733–791, 2015.`,
    ],
    // diapositivas: "diapositivas/archivo.pdf",
    // video: "https://...",
  },

  {
    fecha: "2026-09-24",
    hora: "12:00",
    lugar: "Auditorio Alberto Levy Widmer, Facultad de Ingeniería y Ciencias (UFRO)",
    titulo: "Acciones C¹ de los grupos Baumslag-Solitar",
    expositor: "Franco Gómez",
    procedencia: "estudiante del Magíster en Ciencias Matemáticas, Universidad de Chile",
    resumen: String.raw`La familia de grupos $\mathrm{BS}(m,n)$ es conocida por la diversidad en sus propiedades algebraicas y la simplicidad en su definición al variar los valores de los enteros $m$ y $n$. Por lo mismo, resulta natural estudiar su comportamiento dinámico.

En esta línea, Bonatti, Monteverde, Navas y Rivas demostraron que ciertos grupos solubles, entre ellos $\mathrm{BS}(1,n)$ solo pueden actuar en $[0,1]$ de una única forma cuando exigimos cierta regularidad en la acción, que de hecho es conjugada una acción por transformaciones lineales.

La idea de esta charla es presentar los preliminares necesarios para entender este resultado en $\mathrm{BS}(m,n)$ junto con el contexto en dinámica 1-dimensional de estos grupos. Además, mostraré un trabajo en conjunto con Rivas donde estudiamos las acciones de clase $C^1$ en $[0,1]$ del resto de los grupos en la familia Baumslag-Solitar, confirmando así la diversidad de su comportamiento dinámico al variar $m$ y $n$.`,
    // diapositivas: "diapositivas/archivo.pdf",
    // video: "https://...",
  },

  {
    fecha: "2026-08-27",
    hora: "12:00",
    lugar: "Auditorio Pablo Neruda, Facultad de Ciencias Jurídicas y Empresariales (UFRO)",
    titulo: "Un estudio en Representaciones de Grupos Oligomórficos",
    expositor: "Alejandro Araya",
    procedencia: "estudiante del Magíster en Ciencias con mención en Matemática, Universidad de Talca",
    resumen: String.raw`En el contexto de la teoría de representaciones, hay situaciones en las que las herramientas clásicas no son suficientes. Un ejemplo interesante son las categorías de interpolación en rango complejo introducidas por Pierre Deligne. En esta charla, presentaremos el trabajo de Nate Harman y Andrew Snowden, quienes desarrollan un marco para abordar situaciones como las que aparecen en las categorías de Deligne. Para ello, a partir de grupos oligomórficos, definen una noción de integración que permite construir un análogo de la multiplicación de matrices. Así, nos enfocaremos en la categoría $\underline{\mathrm{Perm}}(G,\mu)$ de “representaciones de permutación”, que permite obtener una visión más concreta de los objetos que aparecen en las categorías de Deligne.

Finalmente, de contar con tiempo, comentaremos algunas propiedades interesantes de esta categoría y por qué resulta útil estudiar este tipo de objetos.`,
    referencias: [
      String.raw`[Del07] P. Deligne, <em>La catégorie des représentations du groupe symétrique $S_t$, lorsque $t$ n’est pas un entier naturel</em>, Algebraic groups and homogeneous spaces, 19:209–273, 2007.`,
      String.raw`[HS22] N. Harman y A. Snowden, <em>Oligomorphic groups and tensor categories</em>, arXiv preprint arXiv:2204.04526, 2022.`,
    ],
    // diapositivas: "diapositivas/archivo.pdf",
    // video: "https://...",
  },

  {
    fecha: "2026-08-27",
    hora: "11:00",
    lugar: "Auditorio Pablo Neruda, Facultad de Ciencias Jurídicas y Empresariales (UFRO)",
    titulo: "Formas reales de hipersuperficies clásicas",
    expositor: "Matías Vásquez",
    procedencia: "estudiante del Magíster en Ciencias con mención en Matemática, Universidad de Talca",
    resumen: String.raw`Una variedad algebraica compleja $X$ puede admitir muchas formas reales no isomorfas entre sí, es decir, variedades definidas sobre $\mathbb{R}$ de manera que al complejizarlas obtenemos una variedad isomorfa a $X$. Estas formas se pueden determinar estudiando un conjunto de ciertas acciones sobre sus grupos de automorfismos, conocido como conjunto de cohomología, pero calcularlo explícitamente suele ser difícil en la práctica.

En esta charla estudiaremos este problema para tres familias clásicas de hipersuperficies: Fermat, Delsarte y Klein. Gracias a la estructura de sus grupos de automorfismos podemos contar explícitamente sus formas reales [LV26]. En particular, recuperaremos un resultado reciente de Sasaki para las hipersuperficies de Fermat [Sas23]. Finalmente, si el tiempo lo permite, comentaremos también cómo estas ideas pueden aplicarse al estudio de formas sobre cuerpos finitos.`,
    referencias: [
      String.raw`[Sas23] Y. Sasaki, <em>On real forms of Fermat hypersurfaces</em>, 2023. Preprint, arXiv:2312.10691.`,
      String.raw`[LV26] A. Liendo y M. Vásquez, <em>Twisted forms of classical hypersurfaces</em>, 2026. Preprint, arXiv:2608.13896.`,
    ],
    // diapositivas: "diapositivas/archivo.pdf",
    // video: "https://...",
  },

];
