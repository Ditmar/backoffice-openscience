## Tipografia para el proyecto

Para la utilizacion de la tipografia "Besley" de Google Fonts
se debe de llamar al archivo mediante importacion:

    import './styles/global.css';

el archivo 'global.css' ya esta importando la tipografia dentro de su codigo.

### Ejemplo para el uso en CSS:

p {
  font-family: 'Besley', serif;
  font-size: 12px;
  line-height: 16px;
}

h1 {
  font-family: 'Besley', serif;
  font-size: 14px;
  line-height: 20px;
}

### Ejemplo para el uso en JavaScript:

import React from 'react';
import './styles/global.css';

export const ExampleComponent: React.FC = () => (
  <div>
    <p className="font-small">Texto con fuente pequeña</p>
    <h1 className="font-medium">Texto con fuente mediana</h1>
  </div>
);

### Ejemplo 2 para el mismo uso
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ fontFamily: 'Besley, serif' }}>Hello world</h1>
      <p className="font-medium">This nuts XD.</p>
    </div>
  );
}

export default App;

### Ejemplo 3 del mismo uso
<h1 style="font-family: 'Besley', serif;">Título con fuente Besley</h1>
<p class="font-medium">Este es un párrafo con tamaño 14px y line-height de 20px.</p>

### Ejemplo 4 según el ejemplo dado en el ticket
<div class="font-small">
  This is for field labels in components and error messages - Barlow Regular
</div>

<div class="font-medium">
  Larger code elements - Barlow Regular
</div>

<div class="font-helper">
  This is for explanatory helper text that appears below a field title within a component - Barlow Regular
</div>


