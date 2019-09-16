import * as React from 'react';
import { connect } from "react-redux";
import {useDrag} from 'react-dnd';
import { selectStory } from "../redux/selectors/stories";
import { State } from "../redux/reducers";

interface StoryParentProps {
  id: string,
}

interface StoryProps extends StoryParentProps{
  listId: string,
  name: string,
  description: string,
}

const Story = (props: StoryProps) => {
  const [, drag] = useDrag({item: { id: props.id, type: 'story' }});

  return (
    <div ref={drag} className="card dashboard__story">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>);
};

export default connect(
  (state: State, props: StoryParentProps) => {
    const { listId, name, description } = selectStory(state, props);

    return {
      listId,
      name,
      description,
    };
  }
)(Story);
