const jsdom = require('jsdom');
const UserTask = require('../__mocks__/addAndRemove.js');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html>');
const { document } = (new JSDOM('...')).window;

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