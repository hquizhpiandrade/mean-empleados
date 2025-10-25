import request from 'supertest';
import express from 'express';
import empleadosRoutes from '../src/routes/empleados.routes';

const app = express();
app.use('/api/empleados', empleadosRoutes);

describe('GET /api/empleados', function () {
    it("lista de usuarios", function (done) {
        request(app)
            .get('/api/empleados')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('POST /api/empleados', () => {
    it(" empleado creado - Henry Quizhpi", (done) => {
        const data = {
            nombre: 'Henry Quizhpi',
            cargo: 'Director',
            departamento: 'Sistemas',
            sueldo: '15.000'
        };
        request(app)
            .post('/api/empleados')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('GET /api/empleados/:id', () => {
    it("responde con un empleado específico", (done) => {
        request(app)
            .get('/api/empleados/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('PUT /api/empleados/:id', () => {
    it("actualiza un empleado existente", (done) => {
        const data = {
            nombre: 'Henry Quizhpi',
            cargo: 'Director General',
            departamento: 'Sistemas',
            sueldo: '20.000'
        };
        request(app)
            .put('/api/empleados/1')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('DELETE /api/empleados/:id', () => {
    it("elimina un empleado", (done) => {
        request(app)
            .delete('/api/empleados/2')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});