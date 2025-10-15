const empleadoCtrl = {};
const Empleado = require('../models/Empleado');

empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
};

empleadoCtrl.createEmpleado = async (req, res) => {
    const empleado = new Empleado({
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
        sueldo: req.body.sueldo
    });
    console.log(empleado);
    await empleado.save();
    res.json({ status: 'Empleado guardado' });
};

empleadoCtrl.getEmpleado = async (req, res) => {
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado);
};

empleadoCtrl.editEmpleado = async (req, res) => {
    const { id } = req.params;
    const empleado = {
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
        sueldo: req.body.sueldo
    };
    await Empleado.findByIdAndUpdate(id, { $set: empleado }, { new: true });
    res.json({ status: 'Empleado actualizado' });
};

empleadoCtrl.deleteEmpleado = async (req, res) => {
  try {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ status: 'Empleado eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = empleadoCtrl;

