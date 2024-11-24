export interface PaginationProps {
  currentPage?: number;
  totalPages: number;
  onClick?: (pageNumber: number) => void;
}
