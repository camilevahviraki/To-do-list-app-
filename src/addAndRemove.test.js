import UserTask from '../__mocks__/addAndRemove.js';

const addAndRemove = new UserTask();

describe('test localStorage add', () => {
  test('Add new task', () => {
    const addAndRemove = new UserTask('qwerty', false, 0);
    expect(addAndRemove.add()).toBe(1);
  });
  test('Add new task', () => {
    const addAndRemove = new UserTask('Azerty', false, 1);
    expect(addAndRemove.add()).toBe(2);
  });
  test('Add new task', () => {
    const addAndRemove = new UserTask('camilux', false, 2);
    expect(addAndRemove.add()).toBe(3);
  });
});
describe('test localStorage remove', () => {
  test('remove task id=1', () => {
    expect(addAndRemove.removeTask(1)).toBe(2);
  });
  test('remove task id=0', () => {
    expect(addAndRemove.removeTask(0)).toBe(1);
  });
  test('remove last', () => {
    expect(addAndRemove.removeTask(0)).toBe(0);
  });
  test('remove when length = null', () => {
    expect(addAndRemove.removeTask(3)).toBe(0);
  });
});

describe('Remove checked tasks', () => {
  test('add elmnts check and remove checkeds elmnts', () => {
    const addAndRemove1 = new UserTask('camilux', false, 0);
    addAndRemove1.add();
    const addAndRemove2 = new UserTask('camilux1', false, 1);
    addAndRemove2.add();
    const addAndRemove3 = new UserTask('camilux2', false, 2);
    addAndRemove3.add();
    const addAndRemove4 = new UserTask('camilux3', false, 3);
    addAndRemove4.add();
    const addAndRemove5 = new UserTask('camilux4', false, 4);
    addAndRemove5.add();
    addAndRemove.check(2);
    addAndRemove.check(3);
    addAndRemove.check(4);
    addAndRemove.check(5);
    expect(addAndRemove.btnRemoveChecked()).toBe(4);
  });
  test('add elmnts check and remove checkeds elmnts', () => {
    const addAndRemove1 = new UserTask('vitron1', false, 5);
    addAndRemove1.add();
    const addAndRemove2 = new UserTask('vitron2', false, 6);
    addAndRemove2.add();
    const addAndRemove3 = new UserTask('vitron3', false, 2);
    addAndRemove3.add();
    const addAndRemove4 = new UserTask('vitron4', false, 3);
    addAndRemove4.add();
    addAndRemove.check(5);
    addAndRemove.check(7);
    addAndRemove.check(1);
    addAndRemove.check(8);
    addAndRemove.check(4);
    addAndRemove.check(9);
    addAndRemove.check(11);
    addAndRemove.check(10);
    expect(addAndRemove.btnRemoveChecked()).toBe(4);
  });
  test('remove all checkeds elmnts', () => {
    addAndRemove.check(0);
    addAndRemove.check(1);
    addAndRemove.check(2);
    expect(addAndRemove.btnRemoveChecked()).toBe(1);
  });
});

describe('Test update storage', () => {
  test('update on description', () => {
    expect(addAndRemove.updateStore('camilux in the mood', 0)).toBe('camilux in the mood');
  });
  test('update on description', () => {
    expect(addAndRemove.updateStore('camilux in the mood', 3)).toBe(-1);
  });
});