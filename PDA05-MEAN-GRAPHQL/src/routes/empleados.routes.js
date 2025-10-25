import { Router } from 'express';
import express from 'express';

const router = Router();

// Middleware para parsear JSON
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Datos de ejemplo para empleados (en memoria)
let empleados = [
    {
        id: 1,
        nombre: 'Henry Quizhpi',
        cargo: 'Director',
        departamento: 'Sistemas',
        sueldo: '15.000'
    },
    {
        id: 2,
        nombre: 'María López',
        cargo: 'Analista',
        departamento: 'TI',
        sueldo: '9.000'
    },
    {
        id: 3,
        nombre: 'Juan Pérez',
        cargo: 'Desarrollador',
        departamento: 'Sistemas',
        sueldo: '8.000'
    }
];

// GET - Obtener todos los empleados
router.get('/', (req, res) => {
    res.status(200).json(empleados);
});

// POST - Crear nuevo empleado
router.post('/', (req, res) => {
    const nuevoEmpleado = {
        id: empleados.length + 1,
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
        sueldo: req.body.sueldo
    };
    
    empleados.push(nuevoEmpleado);
    res.status(200).json(nuevoEmpleado);
});

// GET - Obtener empleado por ID
router.get('/:id', (req, res) => {
    const empleado = empleados.find(e => e.id === parseInt(req.params.id));
    if (!empleado) {
        return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    res.status(200).json(empleado);
});

// PUT - Actualizar empleado
router.put('/:id', (req, res) => {
    const empleado = empleados.find(e => e.id === parseInt(req.params.id));
    if (!empleado) {
        return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    
    empleado.nombre = req.body.nombre || empleado.nombre;
    empleado.cargo = req.body.cargo || empleado.cargo;
    empleado.departamento = req.body.departamento || empleado.departamento;
    empleado.sueldo = req.body.sueldo || empleado.sueldo;
    
    res.status(200).json(empleado);
});

// DELETE - Eliminar empleado
router.delete('/:id', (req, res) => {
    const index = empleados.findIndex(e => e.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    
    empleados.splice(index, 1);
    res.status(200).json({ mensaje: 'Empleado eliminado correctamente' });
});

export default router;

