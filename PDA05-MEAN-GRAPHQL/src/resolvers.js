import Departamento from './models/Departamento.js';
import { empleados } from './sample.js';

export const resolvers = {
  Query: {
    saludar: (root, { name }, context) => {
 
      return `Hola ${name}!`;
    },
    empleados: () => empleados,

    departamento: (root, { nombre }) => {
    
      return `${nombre}!`;
    }
  },
  Mutation: {
    createEmpleado: (_, { input }) => {
      input._id = empleados.length + 1;
      empleados.push(input);
      return input;
    },
    // Guardar en MongoDB como especifica la práctica
    async createDepartamento(_, { input }) {
      const newDepartamento = new Departamento(input);
      await newDepartamento.save();
      return newDepartamento;
    }
  },
  // Resolución de tipos opcional; Departamento.empleados se puede resolver con muestra
  Departamento: {
    empleados: () => empleados
  }
};
