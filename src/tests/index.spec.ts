import { describe, it } from 'node:test';
import { MyExampleFunction } from '..';
import assert from 'node:assert';

describe('MyExampleFunction', () => {
  it('should return a number', () => {
    assert.strictEqual(MyExampleFunction(), 0);
  });
});
