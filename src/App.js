import React from 'react';

import CreateRouter from './routes';

export default function src() {
  const signed = false;

  const Routes = CreateRouter(signed);

  return <Routes />;
}
