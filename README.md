# 🎮Angular-ionic

El templete es blanco para hacerlo desde cero

## Tips/comandos
```
* Si se clona el proyecto antes intalar node
	npm install
	
* Para instalar ionic desde cero en blanco
	ionic start componentes blank
	
*Levantar la app
	ionic serve
	
*Instalar y levantar con ionic lab 
	ionic serve --lab
	
*Generar paginas pero saber antes que se va a instalar 
	ionic g page pages/inicio --dry-run
	(✔ver antes sin el archivo de prueba: )
	ionic g page pages/inicio --dry-run --spec=false
	(✔para descargar los modulos: )
	ionic g page pages/inicio --spec=false

*para crear servicio
	ionic g service services/photo
	ionic g s services/dataLocalReg --skipTests=true

*Capacitor 
 npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem

*Para SplashScreen y StatusBar, los omandos son
	npm install @ionic-native/splash-screen
 npm install @ionic-native/status-bar

```

## URL/IMP
```
https://ionicframework.com/docs/components
```

## ![androide36](https://user-images.githubusercontent.com/71487857/199188171-195d30ba-e4b6-4f3f-bea1-bbf09369c70a.jpg) LEVANTAR APP EN ANDROID
```
1º Capacitor
  ionic capacitor add android

2º Para actualizar android
  ionic capacitor copy android

3º Iniciar en android studio
  ionic capacitor build android

```
## 🐛 Android Errores
```
 *Necesitamos cambiar las dependecias
	  -Este es el error que sale: 

"Caused by: org.gradle.internal.metaobject.AbstractDynamicObject$CustomMessageMissingMethodException: Could not find method compile() for arguments [{name=barcodescanner-release-2.1.5, ext=aar}] on object of type org.gradle.api.internal.artifacts.dsl.dependencies.DefaultDependencyHandler."
 
	 🔨SOLUCIÓN

	Cambiar las dependencias de "compile" a "implementation"

	-File-->ProyectStructure-->Dependencias->"Las que estan subrayadas"-->Cambiar en "configuration" : compile -> implemention

```
## 🎥 Guardar y Mostrar datos de scanner

| Módulo  | Explicación |
| ------- | ----------- |
| ✔ registroScan.model    | Para manejar la informacion/registro de un scaneo       |               
| ✔ data-local.service    | Donde se importa los registros del modelo(almacena info)|
| ✔ scanner-history.page  | Donde se importa los registros del modelo(almacena info)|
| ✔ scanner.page.ts       |  importo el servicio para mostrarlos en los html        |

## 🔒️ Ionic Storage

   🌏URL 
```
https://github.com/ionic-team/ionic-storage
```
  🔧Instalar:
		```
			npm i cordova-sqlite-storage

			npm install @ionic/storage
  
			npm install --save @ionic/storage

		 npm install @ionic/storage-angular
	
  🚀Importación:
	```
	 Angular(app.module.ts):

		import { IonicStorageModule } from '@ionic/storage-angular';

				@NgModule({
						declarations: [AppComponent],
						imports: [
								BrowserModule,
								IonicModule.forRoot(),
								IonicStorageModule.forRoot(),
						],
						providers: [
								BarcodeScanner,
								{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
						],
						bootstrap: [AppComponent],
				})
				export class AppModule { }

	   Servicio(data-local.service.ts)

			import { Storage } from '@ionic/storage';

			guardados: Registro[] = [];

			constructor(private storage: Storage) {
					this.storage.get('registros').then(reg =>{
							this.guardados = reg || [];
					});
				}
			guardarReg(  ){
    this.storage.set('Registros', this.guardados);}
  
## 🌍 Geo localización

### 📌 url mapbox para coger la api
```
https://github.com/ionic-team/ionic-storage
```
### 📌 Tenemos que ir a la api y copiar el CDN y pegarlo en el index

```
	<script src='https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.js'></script>

	<link href='https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css' rel='stylesheet' />

		-(Pegar esto en el html de la pagina mapa)
		<div id='map' style='width: 400px; height: 300px;'></div>
 
```

**Free Software, Hell Yeah!🤘**
