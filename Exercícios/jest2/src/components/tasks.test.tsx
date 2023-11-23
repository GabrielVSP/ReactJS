import { render, fireEvent, screen } from "@testing-library/react"
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Tasks from "./tasks"

describe('Task component', () => {

    const worker = setupServer(
        rest.get("https://jsonplaceholder.typicode.com/todos", async (req, res, ctx) => {

            return res (
                ctx.json([
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": false
                      },
                ])
            )

        })
    )

    beforeAll(() => worker.listen({ onUnhandledRequest: "bypass" }))

    it('Should fetch data and show it on screen', async () => {

        const {queryByText, findByText, getByText} = render(<Tasks />)

        const btn = getByText("Get task")
        fireEvent.click(btn)

        await screen.queryByText('delectus aut autem')

    })

})