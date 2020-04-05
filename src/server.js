const { app, port } = require('./app');

app.listen(process.env.PORT || port, () => {
  console.log(`O servidor backend está listado na porta ${port}`);
});
