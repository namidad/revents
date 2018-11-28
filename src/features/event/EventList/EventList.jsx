import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
  render() {

    const { events, onEventOpen, deleteEvents } = this.props;

    return (
      <div>
        <h1>Event list</h1>
        { events.map((event)=>(
          <EventListItem 
          deleteEvents={deleteEvents} 
          key={event.id} 
          event={event} 
          onEventOpen={onEventOpen}/>
        ))}
        
      </div>
    )
  }
}

export default EventList