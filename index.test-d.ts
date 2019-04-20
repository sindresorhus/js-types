import {expectType} from 'tsd';
import jsTypes = require('.');
import jsTypesJson = require('./js-types.json');

expectType<readonly string[]>(jsTypes);
expectType<readonly string[]>(jsTypesJson);
