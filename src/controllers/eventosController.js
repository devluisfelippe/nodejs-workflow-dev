import Evento from '../models/evento.js';

class EventosController {
  static listarEventos = async (req, res) => {
    try {
      const resultado = await Evento.pegarEventos();
      res.status(200).json(resultado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

export default EventosController;
