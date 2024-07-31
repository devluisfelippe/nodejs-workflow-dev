import Evento from '../models/evento.js';

class EventosController {
  static liberaAcessoEventos = () => process.env.EVENTO_FLAG === 'true';

  static listarEventos = async (req, res) => {
    if (this.liberaAcessoEventos()) {
      try {
        const resultado = await Evento.pegarEventos();
        res.status(200).json(resultado);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.status(404).send();
    }
  };
}

export default EventosController;
