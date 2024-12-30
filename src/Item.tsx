import { forwardRef, HTMLAttributes } from 'react';

export type ItemProps = HTMLAttributes<HTMLDivElement> & {
  id: string;
  withOpacity?: boolean;
  isDragging?: boolean;
};

const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ id, withOpacity, isDragging, style, className, ...props }, ref) => {
    const classes = [
      withOpacity && 'opacity-50',
      isDragging ? 'cursor-grabbing' : 'cursor-grab',
      'inline-block',
      'box-border',
      'flex-wrap',
      'px-2',
      'py-1',
      'mr-1.5',
      'text-center',
      'leading-[18px]',
      'whitespace-nowrap',
      'text-ellipsis',
      'overflow-hidden',
      'bg-slate-200',
      'border',
      'border-slate-400',
      'rounded-full',
      'origin-center',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classes} style={style} {...props}>
        {id}
      </div>
    );
  },
);

export default Item;
