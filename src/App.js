import React from 'react';

import CreateRouter from './routes';

export default function src() {
  const signed = true;

  const Routes = CreateRouter(signed);

  return <Routes />;
}
