import React from 'react'
import ReactPaginate from 'react-paginate';


export const Pagination = ({ info, pageNumber, setPageNumber }) => {
    return ( info &&
        <nav aria-label="Page navigation example" className='navigation-nav'>
            <ReactPaginate
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                className='pagination gap-2'
                nextLabel={'>'}
                previousLabel={'<'}
                nextLinkClassName={'btn btn-primary'}
                previousLinkClassName={'btn btn-primary'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                activeLinkClassName={'bg-primary text-white'}
                breakLinkClassName={'page-link'}
                onPageChange={(data) => {
                    let banner = document.querySelector('.banner');
                    let position = banner.offsetTop + banner.clientHeight

                    window.scrollTo({
                        top: position,
                        left: 0,
                        behavior: 'instant'
                    });
                    setPageNumber(data.selected + 1)
                }}
                pageCount={info?.pages} />
        </nav>

    )
}
