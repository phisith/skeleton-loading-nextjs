export interface ListBoxProps {
  /**
   * list title
   */
  title: string;
  /**
   * to show Skeleton loading
   */
  isLoading: boolean;
  /**
   * data
   */
  data: any;
  /**
   * for check error & error message
   */
  isError: boolean;
}
