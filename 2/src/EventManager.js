export default class EventManager {
  constructor(events) {
    this.events = events;
  }

  run() {
    // Recorremos la lista de eventos.
    this.events.forEach((event) => {
      // Ejecutamos cada evento en el segundo indicado
      // (usando setTimeout el tiempo puede variar ligeramente,
      // pero lo usaré para simplificar la prueba).
      setTimeout(() => event.execute(), event.second * 1000);
    });
  }
}
