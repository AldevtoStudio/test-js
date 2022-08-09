import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory {
  static create(events, types) {
    // Creamos el array de eventos.
    let newEvents = [];
    // Filtramos los eventos con 'type' contemplados.
    const validEvents = events.filter((event) => types.includes(event.type));

    // Por cada evento válido, creamos una clase 'Event' y la añadimos al array.
    validEvents.forEach((event) => {
      newEvents.push(new Event(event.second, event.type, event.message));
    });

    // Enviamos los eventos al 'EventManager'.
    return new EventManager(newEvents);
  }
}
