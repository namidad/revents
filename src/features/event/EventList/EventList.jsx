import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
  render() {

    const { events, onEventOpen, deleteEvents } = this.props;

    return (
      <div>
        { events.map((event)=>(
          <EventListItem 
          deleteEvents={deleteEvents} 
          key={event.id} 
          event={event} 
         />
        ))}
        
      </div>
    )
  }
}

export default EventList