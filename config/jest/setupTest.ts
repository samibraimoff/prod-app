import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);
