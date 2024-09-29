<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { TabLabel } from './TabLabel';

describe('Testing for TabLabel component ', () => {
  it('TabLabel is rendering', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" />);
  });

  it('TabLabel has a title', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a small variant', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a medium variant', () => {
    render(<TabLabel text="TabLabel" isEnable variant="medium" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a large variant', () => {
    render(<TabLabel text="TabLabel" isEnable variant="large" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a disabled state', () => {
    render(<TabLabel text="TabLabel" isEnable={false} variant="small" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a selected state', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" isSelect />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a active state', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" />);
    screen.getByText('TabLabel');
  });
});
=======
import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
=======
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
>>>>>>> 1e093ea (feature/SEM-023)

import { TabLabel } from './TabLabel';

describe('Testing for TabLabel component ', () => {
  it('TabLabel is rendering', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" />);
  });

  it('TabLabel has a title', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a small variant', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a medium variant', () => {
    render(<TabLabel text="TabLabel" isEnable variant="medium" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a large variant', () => {
    render(<TabLabel text="TabLabel" isEnable variant="large" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a disabled state', () => {
    render(<TabLabel text="TabLabel" isEnable={false} variant="small" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a selected state', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" isSelect />);
    screen.getByText('TabLabel');
  });

<<<<<<< HEAD
=======
import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"

import { TabLabel } from "./TabLabel"

describe("Testing for TabLabel component ", () => {
    it("TabLabel is rendering", () => {
        render(<TabLabel text="TabLabel" isEnable={true} variant="small" />)
    })

    it("TabLabel has a title", () => {
        render(<TabLabel text="TabLabel" isEnable={true} variant="small" />)
        screen.getByText("TabLabel")
    })

    it("TabLabel has a small variant", () => {
        render(<TabLabel text="TabLabel" isEnable={true} variant="small" />)
        screen.getByText("TabLabel")
    })

    it("TabLabel has a medium variant", () => {
        render(<TabLabel text="TabLabel" isEnable={true} variant="medium" />)
        screen.getByText("TabLabel")
    })

    it("TabLabel has a large variant", () => {
        render(<TabLabel text="TabLabel" isEnable={true} variant="large" />)
        screen.getByText("TabLabel")
    })

    it("TabLabel has a disabled state", () => {
        render(<TabLabel text="TabLabel" isEnable={false} variant="small" />)
        screen.getByText("TabLabel")
    })

    it("TabLabel has a selected state", () => {
        render(<TabLabel text="TabLabel" isEnable={true} variant="small" isSelect={true} />)
        screen.getByText("TabLabel")
    })

>>>>>>> 28f4eb1 (feature/SEM-023)
    it("TabLabel has a active state", () => {
        render(<TabLabel text="TabLabel" isEnable={true} variant="small" />)
        screen.getByText("TabLabel")
    })

<<<<<<< HEAD
})
>>>>>>> 9f9d328 (feature/SEM-023)
=======
  it('TabLabel has a active state', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" />);
    screen.getByText('TabLabel');
  });
});
>>>>>>> 1e093ea (feature/SEM-023)
=======
})
>>>>>>> 28f4eb1 (feature/SEM-023)
