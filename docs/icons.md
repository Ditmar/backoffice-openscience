# Guía para el uso de íconos SVG en React y Astro :rocket:
## Archivos y su funcionalidad :computer:

### ```useForm.ts```

Este archivo contiene un hook personalizado ```useForm``` que maneja los formularios. Permite gestionar el estado de los campos de un formulario, manejar cambios (```handlerChangeForm```) y reiniciar el formulario (```handlerResetForm```).

### ```SvgIconProps.ts```
Define las propiedades del componente ```Icon```. Algunas propiedades clave:

```src```: ruta del SVG a importar.
```size```: tamaño opcional del ícono.
```className```: clases CSS opcionales para personalizar estilos.
```styles```: propiedades de estilo en línea.
```data-testid```: atributo para pruebas.
```icons.tsx```

Este archivo contiene el componente ```Icon```, que es responsable de renderizar un SVG optimizado.
 Utiliza:

```optimizeSvg```: para ajustar el SVG.
```spanProps```: establece las propiedades del ícono, incluyendo tamaño y estilos.
```optimizeSvg.ts```

Usa ```svgo``` para optimizar el SVG:
Elimina dimensiones no necesarias.

Añade el atributo```viewBox``` al SVG para asegurar que se adapte al tamaño definido.

## ¿Problemas con svgo? :flushed:

Asegúrate de que tienes SVGO instalado correctamente en tu proyecto. Si no lo has instalado, puedes hacerlo ejecutando:
```bash
 yarn add svgo 
```


### ```setupTests.ts```
Configuración básica de Test para pruebas, incluyendo ```@testing-library/jest-dom``` para aserciones en pruebas de componentes.

### ```sg.d.ts```
Declara que los archivos ```.svg?raw``` exportan contenido de tipo ```string```. Esto permite importar íconos SVG en crudo como texto.

## Cómo importar íconos SVG :paperclip:
En un archivo ```.tsx```:
```tsx

import articleManagementIcon from 'src/assets/icons/article-management.svg?raw';

<Icon src={articleManagementIcon} size="24px" />;
```
En un archivo ```.stories.tsx``` (Storybook):
```tsx

import articleManagementIcon from 'src/assets/icons/article-management.svg?raw';

export default {
  title: 'Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: articleManagementIcon,
  size: '24px',
};
```
>Recuerda que son ejemplos y que debes implementarlo de acuerdo a tu proyecto 	:name_badge:

## Pruebas de los íconos 
Se han realizado pruebas en Storybook y en Test para asegurar que los íconos se renderizan correctamente:

### Pruebas en Storybook: Cada ícono es probado con diferentes tamaños y configuraciones para verificar su correcta visualización.
![Captura de pantalla 2024-10-05 124621](https://github.com/user-attachments/assets/b95d2f00-c249-4fa4-970c-5ca8c67dab91)
![Captura de pantalla 2024-10-05 124630](https://github.com/user-attachments/assets/39a5fc60-909e-4253-870d-13769386b811)
>Los iconos fueron renderizados correctamente
### Pruebas con Test: Se utilizan pruebas automatizadas para comprobar que el componente Icon renderiza el SVG correcto y que las propiedades como size, className y data-testid funcionan como se espera.
![image](https://github.com/user-attachments/assets/62965c92-534f-4dbb-8489-7997abbb7785)

>Nota: Tanto las configuraciones de Storybook como las pruebas en Test están sujetas a modificaciones y/o cambios si son requeridos para mejorar la codificación o agregar nuevas funcionalidades.
Con esta estructura, puedes importar y usar íconos SVG de manera eficiente en tus proyectos con soporte para optimización, pruebas y Storybook. :smile: