Bullet In Board

Para esta aplicacion se implemetó react redux, redux toolkit, firebase, firestore, typescript, hooks de react y hooks personalizados.

Para esta aplicacio, se debian manejar dos bases de datos, una para los usuarios, la cual se llamo "users" y una para los productos que se iban a mostrar en la pagina que llamamos "productos".
Ambas bases de datos (colecciones) se hicieron en Firestore. los usuarios se fueron registrando uno a uno conforme se hicieron las pruebas, mientras que para los usuarios, se subieron todos con un 
metodo. Con los datos en las bases de datos empezamos a disponer de ellos.

El registro de los usuarios se hicieron mediante Firebase. Primero se hizo la configuracion directamente en a pagina, donde se activaron los tres metodos de autenticación, por mail, google y facebook. 
Para facebook se hizo una configuración adicional en la página de desarrolladores de meta, lo cual permitio la conexion de la app con facebook. 

Con los metodos de autenticación activos, pasamos a la parte de programación, donde lo primero se hizo la configuracion de firebase co el JDK que entrega la misma pagina. ya con esto el entorno quedo 
listo para que todos pudiesemos trabajar bajo las mismas condiciones, incluso los tres tuvimos acceso al proyecto de firebase para estar al tanto de los cambios en cada coleccion.

con la configuracion lista, se inicio con el maquetado para las intefaces. los inputs de los formularos, botones, secciones, se maquetaron mediante styled-components, por menciionar algunons elementos,
dado que se usaron en diferentes partes de la interfaz. 

con redux se manipularon los estados. Tanto de los usuarios como de los productos. En conjunto con Firebase, se obtenian los datos de lus usarios que posteriormente se manipularon con redux, de forma global
en todo el proyecto, desde cualquier componente.

Mediante el registro por mail, google y facebook, se agregaban documentos a la coleccion users. Mediante el login ccon firebase se hacia la autenticacion del usuario para saber que estaba registrado y que 
habia accedido a la aplicacion, y con estos datos se actualiza el estado del usuario.

Ambas colecciones se manipulan a lo largo de la app.
