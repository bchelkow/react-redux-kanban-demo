import uniqueId from "../utils/uniqueId";

const dashboardIds = new Array(1).fill(null).map(uniqueId);
const listIds = new Array(2).fill(null).map(uniqueId);
const storyIds = new Array(5).fill(null).map(uniqueId);

export default {
  dashboard: { id: dashboardIds[0], name: 'Test Dashboard' },
  lists: {
    [listIds[0]]: { id: listIds[0], dashboardId: dashboardIds[0], name: 'List one' },
    [listIds[1]]: { id: listIds[1], dashboardId: dashboardIds[0], name: 'List two' },
  },
  stories: {
    [storyIds[0]]: { id: storyIds[0], listId: listIds[0], name: 'story 1', description: 'story description' },
    [storyIds[1]]: { id: storyIds[1], listId: listIds[0], name: 'story 2', description: 'story description' },
    [storyIds[2]]: { id: storyIds[2], listId: listIds[0], name: 'story 3', description: 'story description' },
    [storyIds[3]]: { id: storyIds[3], listId: listIds[1], name: 'story 4', description: 'story description' },
    [storyIds[4]]: { id: storyIds[4], listId: listIds[1], name: 'story 5', description: 'story description' },
  },
};
