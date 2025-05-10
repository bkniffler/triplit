import { describe, it } from 'node:test';
import assert from 'node:assert';
import { triplitMetroConfig, triplitMetroResolveRequest } from '../src/metro-config.ts';
import { existsSync } from 'node:fs';

describe('metro config', () => {
  it('should be a function', () => {
    assert.ok(typeof triplitMetroConfig === 'function');
    const config = triplitMetroResolveRequest('@triplit/logger/console');
    assert.ok(config);
    const exists = existsSync(config!.filePath);
    assert.ok(exists);
  });
});
