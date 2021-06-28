import React from "react";

function Table({ className }) {
  return (
    <div className={className}>
      <table className="table-fixed border-2 border-PColor w-full">
        <tbody className="border-2 border-PColor">
          <Row title="Test" description="Descriptions" />
          <Row title="Test" description="Descriptions" />
          <Row title="Test" description="Descriptions" />
          <Row title="Test" description="Descriptions" />
          <Row title="Test" description="Descriptions" />
        </tbody>
      </table>
    </div>
  );
}

export default Table;

function Row({ title, description }) {
  return (
    <tr className="border-2 border-PColor">
      <td className="w-1/4 border-2 border-PColor bg-gray-300 px-2 py-1">
        {title}
      </td>
      <td className="w-1/2 border-2 border-PColor">{description}</td>
    </tr>
  );
}
