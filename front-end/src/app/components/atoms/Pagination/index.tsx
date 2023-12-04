import ArrowLeft from '@assets/icons/ArrowLeft';
import ArrowPaginationLeft from '@assets/icons/ArrowPaginationLeft';
import ArrowPaginationRight from '@assets/icons/ArrowPaginationRight';
import ArrowRight from '@assets/icons/ArrowRight';
import { usePagination } from '@hooks/usePagination';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';

interface PaginationProps {
  totalPageCount: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  currentPage: number;
  pageName: string;
  id?: string;
  onFetchData?: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({
  totalPageCount,
  onPageChange,
  siblingCount = 1,
  currentPage,
  pageName,
  onFetchData,
  id,
}) => {
  const router = useRouter();
  const { query } = router;

  const paginationRange = usePagination({
    totalPageCount,
    siblingCount,
    currentPage,
  });

  useEffect(() => {
    if (query.page) {
      let p =
        Number(query.page) <= 1
          ? 1
          : Number(query.page) >= totalPageCount
          ? totalPageCount
          : Number(query.page);
      onPageChange(Number(p));
    }
  }, [query.page]);

  const handlePagination = useCallback(
    (pageIndex) => {
      if (pageIndex === '...') return;
      const page =
        pageIndex <= 1
          ? 1
          : pageIndex >= totalPageCount
          ? totalPageCount
          : pageIndex;
      console.log(page);
      onPageChange(page);
      onFetchData?.(page);
      id
        ? router.replace(
            {
              pathname: pageName,
              query: {
                id: id,
                page: page,
              },
            },
            undefined,
            { scroll: false },
          )
        : router.replace(
            {
              pathname: pageName,
              query: {
                page: page,
              },
            },
            undefined,
            { scroll: false },
          );
    },
    [currentPage, totalPageCount],
  );

  return (
    <React.Fragment>
      <div className="my-8 flex items-center justify-center gap-2">
        <button
          className="w-[40px] h-[40px] relative bg-white bottom-[1px] flex items-center justify-center rounded-[10px] hover:bg-[#004DFF]"
          style={{ border: '1px solid #D8DBE0' }}
          onClick={() => handlePagination(1)}>
          <ArrowPaginationLeft className="w-[24px] h-[24px] text-[#D8DBE0]" />
        </button>
        <button
          className="w-[40px] h-[40px] relative bg-white bottom-[1px] flex items-center justify-center rounded-[10px] hover:bg-[#004DFF]"
          style={{ border: '1px solid #D8DBE0' }}
          onClick={() => handlePagination(currentPage - 1)}>
          <ArrowLeft className="w-[24px] h-[24px] text-[#D8DBE0]" />
        </button>
        {paginationRange?.map((item, index) => (
          <button
            key={index}
            className={classNames(
              'min-w-[40px] min-h-[40px] relative flex items-center justify-center rounded-[10px] hover:bg-[#004DFF] hover:text-white px-2',
              item == currentPage
                ? 'bg-[#004DFF] text-white'
                : 'bg-white text-[#3E78FD]',
            )}
            onClick={() => handlePagination(item)}>
            {item}
          </button>
        ))}
        <button
          className="w-[40px] h-[40px] relative bg-white bottom-[1px] flex items-center justify-center rounded-[10px] hover:bg-[#004DFF]"
          style={{ border: '1px solid #D8DBE0' }}
          onClick={() => handlePagination(currentPage + 1)}>
          <ArrowRight className="w-[24px] h-[24px] text-[#D8DBE0]" />
        </button>
        <button
          className="w-[40px] h-[40px] relative bg-white bottom-[1px] flex items-center justify-center rounded-[10px] hover:bg-[#004DFF]"
          style={{ border: '1px solid #D8DBE0' }}
          onClick={() => handlePagination(totalPageCount)}>
          <ArrowPaginationRight className="w-[24px] h-[24px] text-[#D8DBE0]" />
        </button>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Pagination);
