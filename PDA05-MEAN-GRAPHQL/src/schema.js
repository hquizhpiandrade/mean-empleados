import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers.js';

const typeDefs = `
  type Departamento {
    _id: ID
    nombre: String
    slogan: String
    empleados: [Empleado]
  }

  type Gerente {
    _id: ID
    nombre: String
    email: String
  }

  type Empleado {
    _id: ID
    nombre: String!
    sueldo: Float
  }

  input EmpleadoInput {
    nombre: String!
    sueldo: Float
  }

  input DepartamentoInput {
    nombre: String!
    slogan: String
  }

  type Query {
    saludar(name: String!): String
    empleados: [Empleado]
    departamento(nombre: String!): String
  }

  type Mutation {
    createEmpleado(input: EmpleadoInput): Empleado
    createDepartamento(input: DepartamentoInput): Departamento
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
