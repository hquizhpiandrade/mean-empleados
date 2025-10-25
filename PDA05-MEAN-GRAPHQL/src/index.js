import express from 'express';
import cors from 'cors';
import { createHandler } from 'graphql-http/lib/use/express';
import schema from './schema';
import './database';
import empleadosRoutes from './routes/empleados.routes';

const app = express();


app.all('/graphql', createHandler({ 
  schema: schema 
}));

app.use('/api/empleados', empleadosRoutes);

app.get('/', (_req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>GraphiQL</title>
  <style>
    body {
      height: 100%;
      margin: 0;
      width: 100%;
      overflow: hidden;
    }
    #graphiql {
      height: 100vh;
    }
  </style>
  <link rel="stylesheet" href="https://unpkg.com/graphiql@3.0.0/graphiql.min.css" />
</head>
<body>
  <div id="graphiql">Cargando GraphiQL...</div>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/graphiql@3.0.0/graphiql.min.js"></script>
  <script>
    const root = ReactDOM.createRoot(document.getElementById('graphiql'));
    const fetcher = GraphiQL.createFetcher({
      url: '/graphql',
    });
    root.render(
      React.createElement(GraphiQL, { fetcher: fetcher })
    );
  </script>
</body>
</html>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(' Servidor en http://localhost:' + PORT);
  console.log(' GraphiQL en http://localhost:' + PORT + '/graphql');
});
