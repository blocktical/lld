```mermaid
classDiagram
    class PaginatedAPISimulator {
        - data: list
        - page_size: int
        + __init__(data, page_size)
        + get_page(page_number): list
        + total_pages(): int
    }

    class APIIterator {
        - api: PaginatedAPISimulator
        - current_page: int
        - current_items: list
        - index_in_page: int
        + __init__(api_simulator)
        + __iter__(): APIIterator
        + __next__(): any
    }

    class MainClient {
        + main()
    }

    PaginatedAPISimulator <.. APIIterator : uses
    MainClient --> APIIterator : iterates