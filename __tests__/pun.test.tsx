import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Pun from '@/app/pun/new/page';

test('Page', () => {
    render(<Pun />);
    expect(screen.getByRole('heading', { level: 1, name: 'Pun Page'})).toBeDefined();
});