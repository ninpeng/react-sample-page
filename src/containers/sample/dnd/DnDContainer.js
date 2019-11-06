import React, {useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import DefaultSampleContent from '../DefaultSampleContent';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

const initial = Array.from({ length: 10 }, (v, k) => k).map(k => {
  const custom = {
    id: `id-${k}`,
    content: `Quote ${k}`
  };

  return custom;
});

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Quote = ({ quote, index }) => {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          {quote.content}
        </div>
      )}
    </Draggable>
  );
}

const QuoteList = React.memo(function QuoteList({ quotes }) {
  return quotes.map((quote, index) => (
    <Quote quote={quote} index={index} key={quote.id} />
  ));
});

const DnDContainer = () => {

  const [state, setState] = useState({ quotes: initial });

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    );

    setState({ quotes });
  }

  return (
    <DefaultSampleContent>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              <QuoteList quotes={state.quotes} />
              {provided.placeholder}
            </div>
            )
          }
        </Droppable>
      </DragDropContext>
    </DefaultSampleContent>
  )
}

export default DnDContainer;
