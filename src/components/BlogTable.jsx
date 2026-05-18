/**
 * Standard blog data table — matches SmallHomeWalkerDetail "Storage Solutions" design.
 */
export function BlogTableWrap({ children, className = 'mt-4' }) {
  return <div className={`blog-table-wrap overflow-x-auto ${className}`}>{children}</div>;
}

export default function BlogTable({ headers, rows, minWidth, className = 'mt-4', children }) {
  if (children) {
    return (
      <BlogTableWrap className={className}>
        <table className="blog-data-table w-full border-collapse" style={minWidth ? { minWidth } : undefined}>
          {children}
        </table>
      </BlogTableWrap>
    );
  }

  return (
    <BlogTableWrap className={className}>
      <table className="blog-data-table w-full border-collapse" style={minWidth ? { minWidth } : undefined}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={typeof row[0] === 'string' || typeof row[0] === 'number' ? row[0] : rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </BlogTableWrap>
  );
}

function renderProsConsCell(content) {
  if (Array.isArray(content)) {
    return (
      <ul className="list-disc space-y-1 pl-5">
        {content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return content;
}

/** Two-column Pros / Cons block — same styling as blog data tables. */
export function BlogProsCons({ pros, cons, prosLabel = 'Pros:', consLabel = 'Cons:', className = 'mt-4' }) {
  return (
    <div className={`blog-table-wrap blog-pros-cons overflow-x-auto ${className}`}>
      <div className="blog-data-grid">
        <div className="grid grid-cols-2">
          <div className="blog-table-th">{prosLabel}</div>
          <div className="blog-table-th">{consLabel}</div>
        </div>
        <div className="grid grid-cols-2">
          <div className="blog-table-td">{renderProsConsCell(pros)}</div>
          <div className="blog-table-td">{renderProsConsCell(cons)}</div>
        </div>
      </div>
    </div>
  );
}

/** Pros / Cons with optional Buy column (product review tables). */
export function BlogProsConsBuy({
  pros,
  cons,
  buyHref,
  buyLabel = 'Check Price',
  prosHeader = 'Pros',
  consHeader = 'Cons',
  buyHeader = 'Buy',
  className = 'mt-3',
}) {
  const gridStyle = { gridTemplateColumns: '1fr 1fr 74px' };

  return (
    <div className={`blog-table-wrap blog-pros-cons overflow-x-auto ${className}`}>
      <div className="blog-data-grid">
        <div className="grid" style={gridStyle}>
          <div className="blog-table-th">{prosHeader}</div>
          <div className="blog-table-th">{consHeader}</div>
          <div className="blog-table-th text-center">{buyHeader}</div>
        </div>
        <div className="grid" style={gridStyle}>
          <div className="blog-table-td">{renderProsConsCell(pros)}</div>
          <div className="blog-table-td">{renderProsConsCell(cons)}</div>
          <div className="blog-table-td flex items-center justify-center">
            <a
              className="rounded-full bg-[#ffc400] px-3 py-2 text-center text-[8px] font-black text-black no-underline"
              href={buyHref}
            >
              {buyLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Two-column block with custom header labels and arbitrary cell content. */
export function BlogTwoColumnContent({ leftTitle, rightTitle, left, right, className = 'mt-4' }) {
  return (
    <div className={`blog-table-wrap blog-pros-cons overflow-x-auto ${className}`}>
      <div className="blog-data-grid">
        <div className="grid grid-cols-2">
          <div className="blog-table-th">{leftTitle}</div>
          <div className="blog-table-th">{rightTitle}</div>
        </div>
        <div className="grid grid-cols-2">
          <div className="blog-table-td">{left}</div>
          <div className="blog-table-td">{right}</div>
        </div>
      </div>
    </div>
  );
}

/** Div-grid tables (same visual design as BlogTable). */
export function BlogGridTable({ headers, rows, columnTemplate, minWidth, className = 'mt-4' }) {
  const gridStyle = {
    gridTemplateColumns: columnTemplate ?? `repeat(${headers.length}, minmax(0, 1fr))`,
  };

  return (
    <div className={`blog-table-wrap overflow-x-auto ${className}`}>
      <div className="blog-data-grid" style={minWidth ? { minWidth } : undefined}>
        <div className="grid" style={gridStyle}>
          {headers.map((header) => (
            <div className="blog-table-th" key={header}>
              {header}
            </div>
          ))}
        </div>
        {rows.map((row, rowIndex) => (
          <div className="grid" style={gridStyle} key={typeof row[0] === 'string' || typeof row[0] === 'number' ? row[0] : rowIndex}>
            {row.map((cell, cellIndex) => (
              <div className="blog-table-td" key={cellIndex}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
