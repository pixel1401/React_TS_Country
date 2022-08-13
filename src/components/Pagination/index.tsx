import * as C from './style';

interface PaginationTS {
    limit: number,
    total: number,
    offset: number,
    setOffset: (e: number) => void
}

const MAX_ITEMS = 3;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }: PaginationTS) => {
    const current = offset ? offset / limit + 1 : 1;
    const pages = Math.ceil(total / limit);
    const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
    const first = Math.min(
        Math.max(current - MAX_LEFT, 1),
        maxFirst
    );

    function onPageChange(page: number) {
        setOffset((page - 1) * limit);
    }

    return (
        <C.Pagination>
            <li>
                <button
                    onClick={() => onPageChange(current - 1)}
                    disabled={current === 1}
                >
                    &lt;
                </button>
            </li>
            {Array.from({ length: Math.min(MAX_ITEMS, pages) })
                .map((_, index) => index + first)
                .map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => onPageChange(page)}
                            className={page === current ? 'active' : ''}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            <li>
                <button
                    onClick={() => onPageChange(current + 1)}
                    disabled={current === pages}
                >
                    &gt;
                </button>
            </li>
        </C.Pagination>
    );
};

export default Pagination;