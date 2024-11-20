const express = require("express");
const soap = require("soap");
const app = express();

const URL_SOAP = "http://www.dneonline.com/calculator.asmx?WSDL";

// Middleware para manejar JSON
app.use(express.json());

// Función genérica para realizar una operación SOAP
const realizarOperacion = async (operacion, argumentos) => {
  const cliente = await soap.createClientAsync(URL_SOAP);
  return cliente[operacion + "Async"](argumentos);
};

// Función para validar los valores de entrada
const validarEntradas = (req, res, next) => {
  const { intA, intB } = req.body;

  if (intA === undefined || intA === null || intB === undefined || intB === null) {
    return res.status(400).json({ error: "Por favor, ingrese ambos valores (intA e intB)." });
  }

  if (typeof intA !== "number" || typeof intB !== "number") {
    return res.status(400).json({ error: "Los valores intA e intB deben ser números." });
  }

  next();
};

// Rutas
app.post("/sumar", validarEntradas, async (req, res) => {
  const { intA, intB } = req.body;
  try {
    const resultado = await realizarOperacion("Add", { intA, intB });
    res.json({ resultado: resultado[0].AddResult });
  } catch (error) {
    res.status(500).json({ error: "Error al realizar la suma: " + error.message });
  }
});

app.post("/restar", validarEntradas, async (req, res) => {
  const { intA, intB } = req.body;
  try {
    const resultado = await realizarOperacion("Subtract", { intA, intB });
    res.json({ resultado: resultado[0].SubtractResult });
  } catch (error) {
    res.status(500).json({ error: "Error al realizar la resta: " + error.message });
  }
});

app.post("/multiplicar", validarEntradas, async (req, res) => {
  const { intA, intB } = req.body;
  try {
    const resultado = await realizarOperacion("Multiply", { intA, intB });
    res.json({ resultado: resultado[0].MultiplyResult });
  } catch (error) {
    res.status(500).json({ error: "Error al realizar la multiplicación: " + error.message });
  }
});

app.post("/dividir", validarEntradas, async (req, res) => {
  const { intA, intB } = req.body;

  // Validar división por cero
  if (intB === 0) {
    return res.status(400).json({ error: "No se puede dividir entre 0." });
  }

  try {
    const resultado = await realizarOperacion("Divide", { intA, intB });
    res.json({ resultado: resultado[0].DivideResult });
  } catch (error) {
    res.status(500).json({ error: "Error al realizar la división: " + error.message });
  }
});

// Iniciar el servidor
const PUERTO = 3000;
app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});
