import React from 'react';

const RevisionTracker = ({ revisions }) => {
  const [expanded, setExpanded] = React.useState(false);

  // Преобразуем строковые данные в объекты
  const parsedRevisions = revisions.map((revStr) => {
    const [number, date, changes] = revStr.split(' - ');
    return { number, date, changes };
  });

  return (
    <p><div>
      <button onClick={() => setExpanded(!expanded)}>
          <i><span style={{ fontSize: '1.2em' }}>Редакция {parsedRevisions[0].number}</span></i>  
      </button>

      {expanded && (
        <table className="revision-table">
          <thead>
            <tr>
              <th>Номер редакции</th>
              <th>Дата</th>
              <th>Описание изменений</th>
            </tr>
          </thead>
          <tbody>
            {parsedRevisions.map((rev, index) => (
              <tr key={index}>
                <td>{rev.number}</td>
                <td>{rev.date}</td>
                <td>{rev.changes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div></p>
  );
};

export default RevisionTracker;
