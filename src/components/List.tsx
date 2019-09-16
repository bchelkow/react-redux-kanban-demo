import * as React from 'react';
import { useDrop } from 'react-dnd';
import { connect } from "react-redux";
import Story from './Story';
import { selectList, selectListStoryIds } from "../redux/selectors/lists";
import { State } from "../redux/reducers";
import { moveStory } from "../redux/actions/stories";

interface ListParentProps {
  id: string,
}

interface ListProps extends ListParentProps{
  name: string,
  stories: string[],
  moveStory: (storyId: string) => void,
}

interface StoryItem {
  id: string,
  type: 'story',
}

const renderStory = (id: string) => <Story key={id} id={id} />;

const List = (props: ListProps) => {
  const [, drop] = useDrop({
    accept: 'story', drop: (item: StoryItem) => props.moveStory(item.id),
  });
  const { name, stories } = props;

  return (
    <div className="col card dashboard__list">
      <div className="card-title"><h1>{name}</h1></div>
      <div ref={drop} className="dashboard--full-height">
        {stories && stories.map(renderStory)}
      </div>
    </div>
  );
};

export default connect(
  (state: State, props: ListParentProps) => {
    const { name } = selectList(state, props);

    return {
      name,
      stories: selectListStoryIds(state, props),
    };
  },
  (dispatch, props: ListParentProps) => ({
    moveStory: (storyId: string) => dispatch(moveStory(storyId, props.id)),
  })
)(List);
