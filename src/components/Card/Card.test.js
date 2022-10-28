import { render, screen } from '@testing-library/react';
import Card from './Card';
import { unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it ("render card correctly", () => {
    const beer = {
        name:"brew",
        image_url:"beers/beer.jpg",
        description:"tasty beer",
        id:1
    }
    act(() => {
        render(<Card beerName = {beer.name} beerThumbnail = {beer.image_url} beerDesc = {beer.description} key={beer.id} />,container);
    });
    const beerName = screen.getByText(/brew/i);
    expect(beerName).toBeInTheDocument();

    const beerImage = screen.getByRole('img');
    expect(beerImage).toHaveAttribute('src', 'beers/beer.jpg');

    const beerDesc = screen.getByText(/tasty beer/i);
    expect(beerDesc).toBeTruthy();
});