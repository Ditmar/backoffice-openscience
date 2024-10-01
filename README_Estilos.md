# Para la utilizacion de la tipografia "Besley"
# se debe de llamar al archivo mediante importacion:

    import './styles/global.css';

### Ejemplo para el uso en CSS:

```css
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
